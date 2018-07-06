export default {
  Query: {
    fields: {
      product: {
        sqlPaginate: true,
        sortKey: {
          order: 'DESC',
          key: 'id',
        },
        where: (table, args) => {
          return !!args.idList ? `${table}.id IN (${args.idList.join(', ')})` : ''
        },
      },
    },
  },
};
