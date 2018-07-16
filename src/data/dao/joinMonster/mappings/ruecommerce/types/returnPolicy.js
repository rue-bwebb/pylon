export default {
  ReturnPolicy: {
    sqlTable: 'products_returnpolicy',
    uniqueKey: 'id',
    fields: {
      longDescription: {
        sqlColumn: 'long_description',
      },
      name: {
        sqlColumn: 'name',
      },
      shortDescription: {
        sqlColumn: 'short_description',
      },
    },
  },
};