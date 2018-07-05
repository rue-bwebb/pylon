export default {
  Query: {
    fields: {
      product: {
        where: (table, args) => `${table}.id IN (${args.idList.join(', ')})`,
      },
    },
  },
};