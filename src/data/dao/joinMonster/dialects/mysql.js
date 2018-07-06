import {
  interpretForOffsetPaging,
  interpretForKeysetPaging,
  orderColumnsToString,
} from 'join-monster/dist/stringifiers/shared';
import { filter } from 'lodash';

function quote(str) {
  return `\`${str}\``;
}

function keysetPagingSelect(table, whereCondition, order, limit, as, options = {}) {
  let {
    joinCondition, joinType, extraJoin, q,
  } = options;

  q = q || quote;
  whereCondition = filter(whereCondition).join(' AND ') || 'TRUE';

  if (joinCondition) {
    return `\
${joinType || ''} JOIN (
  SELECT ${q(as)}.*
  FROM ${table} ${q(as)}
  ${extraJoin ? `LEFT JOIN ${extraJoin.name} ${q(extraJoin.as)}
    ON ${extraJoin.condition}` : ''}
  WHERE ${whereCondition}
  ORDER BY ${orderColumnsToString(order.columns, q, order.table)}
  LIMIT ${limit}
) ${q(as)} ON ${joinCondition}`;
  }
  return `\
FROM (
  SELECT ${q(as)}.*
  FROM ${table} ${q(as)}
  WHERE ${whereCondition}
  ORDER BY ${orderColumnsToString(order.columns, q, order.table)}
  LIMIT ${limit}
) ${q(as)}`;
}

function offsetPagingSelect(table, pagingWhereConditions, order, limit, offset, as, options = {}) {
  let {
    joinCondition, joinType, extraJoin, q,
  } = options;

  q = q || quote;

  const whereCondition = filter(pagingWhereConditions).join(' AND ') || 'TRUE';

  if (joinCondition) {
    return `\
${joinType || ''} JOIN (
  SELECT ${q(as)}.*, count(*) OVER () AS ${q('$total')}
  FROM ${table} ${q(as)}
  ${extraJoin ? `LEFT JOIN ${extraJoin.name} ${q(extraJoin.as)}
    ON ${extraJoin.condition}` : ''}
  WHERE ${whereCondition}
  ORDER BY ${orderColumnsToString(order.columns, q, order.table)}
  LIMIT ${limit} OFFSET ${offset}
) ${q(as)} ON ${joinCondition}`;
  }
  return `\
FROM (
  SELECT ${q(as)}.*, count(*) OVER () AS ${q('$total')}
  FROM ${table} ${q(as)}
  WHERE ${whereCondition}
  ORDER BY ${orderColumnsToString(order.columns, q, order.table)}
  LIMIT ${limit} OFFSET ${offset}
) ${q(as)}`;
}


const dialect = {
  name: 'mysql',
  quote,
  compositeKey(parent, keys) {
    keys = keys.map(key => `${quote(parent)}.${quote(key)}`)
    return `CONCAT(${keys.join(', ')})`
  },
  async handleBatchedManyToManyPaginated(parent, node, context, tables, batchScope, joinCondition) {
    const pagingWhereConditions = [
      `\`${node.junction.as}\`.\`${node.junction.sqlBatch.thisKey.name}\` = temp.\`${node.junction.sqlBatch.parentKey.name}\``,
    ];

    if (node.junction.where) {
      pagingWhereConditions.push(
        await node.junction.where(`\`${node.junction.as}\``, node.args || {}, context, node),
      );
    }

    if (node.where) {
      pagingWhereConditions.push(
        await node.where(`\`${node.as}\``, node.args || {}, context, node),
      );
    }

    const tempTable = `FROM (VALUES ${batchScope.map(val => `(${val})`)}) temp("${node.junction.sqlBatch.parentKey.name}")`;

    tables.push(tempTable);

    const lateralJoinCondition = `\`${node.junction.as}\`.\`${node.junction.sqlBatch.thisKey.name}\` = temp.\`${node.junction.sqlBatch.parentKey.name}\``;

    const lateralJoinOptions = { joinCondition: lateralJoinCondition, joinType: 'LEFT' };

    if (node.where || node.orderBy) {
      lateralJoinOptions.extraJoin = {
        name: node.name,
        as: node.as,
        condition: joinCondition,
      };
    }

    if (node.sortKey || node.junction.sortKey) {
      const { limit, order, whereCondition: whereAddendum } = interpretForKeysetPaging(node, dialect);

      pagingWhereConditions.push(whereAddendum);

      tables.push(
        keysetPagingSelect(node.junction.sqlTable, pagingWhereConditions, order, limit, node.junction.as, lateralJoinOptions),
      );
    } else if (node.orderBy || node.junction.orderBy) {
      const { limit, offset, order } = interpretForOffsetPaging(node, dialect);

      tables.push(
        offsetPagingSelect(
          node.junction.sqlTable, pagingWhereConditions, order,
          limit, offset, node.junction.as, lateralJoinOptions,
        ),
      );
    }

    tables.push(`LEFT JOIN ${node.name} AS "${node.as}" ON ${joinCondition}`);
  },
  async handleBatchedOneToManyPaginated(parent, node, context, tables, batchScope) {
    const pagingWhereConditions = [
      `\`${node.as}\`.\`${node.sqlBatch.thisKey.name}\` = temp."${node.sqlBatch.parentKey.name}\``,
    ];

    if (node.where) {
      pagingWhereConditions.push(
        await node.where(`\`${node.as}\``, node.args || {}, context, node),
      );
    }

    const tempTable = `FROM (VALUES ${batchScope.map(val => `(${val})`)}) temp("${node.sqlBatch.parentKey.name}")`;

    tables.push(tempTable);

    const lateralJoinCondition = `\`${node.as}\`.\`${node.sqlBatch.thisKey.name}\` = temp.\`${node.sqlBatch.parentKey.name}\``;

    if (node.sortKey) {
      const { limit, order, whereCondition: whereAddendum } = interpretForKeysetPaging(node, dialect);

      pagingWhereConditions.push(whereAddendum);

      tables.push(
        keysetPagingSelect(node.name, pagingWhereConditions, order, limit, node.as, { joinCondition: lateralJoinCondition }),
      );
    } else if (node.orderBy) {
      const { limit, offset, order } = interpretForOffsetPaging(node, dialect);

      tables.push(
        offsetPagingSelect(node.name, pagingWhereConditions, order, limit, offset, node.as, {
          joinCondition: lateralJoinCondition,
        }),
      );
    }
  },
  async handleJoinedManyToManyPaginated(parent, node, context, tables, joinCondition1, joinCondition2) {
    const pagingWhereConditions = [
      await node.junction.sqlJoins[0](`\`${parent.as}\``, `\`${node.junction.as}\``, node.args || {}, context, node),
    ];

    if (node.junction.where) {
      pagingWhereConditions.push(
        await node.junction.where(`\`${node.junction.as}\``, node.args || {}, context, node),
      );
    }

    if (node.where) {
      pagingWhereConditions.push(
        await node.where(`\`${node.as}\``, node.args || {}, context, node),
      );
    }

    const lateralJoinOptions = { joinCondition: joinCondition1, joinType: 'LEFT' };

    if (node.where || node.orderBy) {
      lateralJoinOptions.extraJoin = {
        name: node.name,
        as: node.as,
        condition: joinCondition2,
      };
    }

    if (node.sortKey || node.junction.sortKey) {
      const { limit, order, whereCondition: whereAddendum } = interpretForKeysetPaging(node, dialect);

      pagingWhereConditions.push(whereAddendum);

      tables.push(
        keysetPagingSelect(node.junction.sqlTable, pagingWhereConditions, order, limit, node.junction.as, lateralJoinOptions),
      );
    } else if (node.orderBy || node.junction.orderBy) {
      const { limit, offset, order } = interpretForOffsetPaging(node, dialect);

      tables.push(
        offsetPagingSelect(
          node.junction.sqlTable, pagingWhereConditions, order,
          limit, offset, node.junction.as, lateralJoinOptions,
        ),
      );
    }
  },
  async handleJoinedOneToManyPaginated(parent, node, context, tables, joinCondition) {
    const pagingWhereConditions = [
      await node.sqlJoin(`\`${parent.as}\``, `\`${node.as}\``, node.args || {}, context, node),
    ];

    if (node.where) {
      pagingWhereConditions.push(
        await node.where(`\`${node.as}\``, node.args || {}, context, node),
      );
    }

    // which type of pagination are they using?
    if (node.sortKey) {
      const { limit, order, whereCondition: whereAddendum } = interpretForKeysetPaging(node, dialect);

      pagingWhereConditions.push(whereAddendum);

      tables.push(
        keysetPagingSelect(node.name, pagingWhereConditions, order, limit, node.as, { joinCondition, joinType: 'LEFT' }),
      );
    } else if (node.orderBy) {
      const { limit, offset, order } = interpretForOffsetPaging(node, dialect);

      tables.push(
        offsetPagingSelect(node.name, pagingWhereConditions, order, limit, offset, node.as, {
          joinCondition, joinType: 'LEFT',
        }),
      );
    }
  },
  async handlePaginationAtRoot(parent, node, context, tables) {
    const pagingWhereConditions = [];

    if (node.sortKey) {
      const { limit, order, whereCondition: whereAddendum } = interpretForKeysetPaging(node, dialect);

      pagingWhereConditions.push(whereAddendum);

      if (node.where) {
        pagingWhereConditions.push(
          await node.where(`\`${node.as}\``, node.args || {}, context, node),
        );
      }

      tables.push(
        keysetPagingSelect(node.name, pagingWhereConditions, order, limit, node.as),
      );
    } else if (node.orderBy) {
      const { limit, offset, order } = interpretForOffsetPaging(node, dialect);

      if (node.where) {
        pagingWhereConditions.push(
          await node.where(`\`${node.as}\``, node.args || {}, context, node),
        );
      }

      tables.push(
        offsetPagingSelect(node.name, pagingWhereConditions, order, limit, offset, node.as),
      );
    }
  },
};

export default dialect;
