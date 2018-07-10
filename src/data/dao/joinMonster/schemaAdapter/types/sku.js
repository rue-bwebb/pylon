export default {
  Sku: {
    sqlTable: 'products_sku',
    uniqueKey: 'id',
    fields: {
      active: {
        sqlColumn: 'active',
      },
      completeResourceUri: {
        sqlColumn: 'complete_resource_uri',
      },
      features: {
        sqlColumn: 'features',
      },
      fulfillmentMethod: {
        sqlColumn: 'fulfillment_method',
      },
      highlights: {
        sqlColumn: 'highlights',
      },
      listPrice: {
        sqlColumn: 'list_price',
      },
      msrp: {
        sqlColumn: 'msrp',
      },
      shippingUpcharge: {
        sqlColumn: 'shipping_upcharge',
      },
      skuNumber: {
        sqlColumn: 'sku_number',
      },
      termsAndConditions: {
        sqlColumn: 'terms_and_conditions',
      },
      upc: {
        sqlColumn: 'upc',
      },
      _id: {
        sqlColumn: 'id',
      },
    },
  },
};