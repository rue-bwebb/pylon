export default {
  Brand: {
    sqlTable: 'brands_brand',
    uniqueKey: 'id',
    fields: {
      businessId: {
        sqlColumn: 'business_id',
      },
      id: {
        sqlColumn: 'id',
      },
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
}