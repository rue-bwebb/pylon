export default {
  ProductTag: {
    sqlTable: 'products_producttag',
    uniqueKey: 'id',
    fields: {
      deprecated: {
        sqlColumn: 'deprecated',
      },
      group: {
        sqlColumn: 'group',
      },
      id: {
        sqlColumn: 'id',
      },
      value: {
        sqlColumn: 'value',
      },
    },
  },
};