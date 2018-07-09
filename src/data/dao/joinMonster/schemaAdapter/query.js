export default {
  Query: {
    fields: {
      products: {
        sqlPaginate: true,
        sortKey: {
          order: 'DESC',
          key: 'id',
        },
        where: (table, args) => {
          return !!args.ids ? `${table}.id IN (${args.ids.join(', ')})` : ''
        },
      },
    },
  },
};
