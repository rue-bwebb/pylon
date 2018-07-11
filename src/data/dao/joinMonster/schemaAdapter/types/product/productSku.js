export default {
  ProductSku: {
    sqlTable: 'products_sku',
    uniqueKey: 'id',
    fields: {
      active: {
        sqlColumn: 'active',
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
      purchaseOrders: {
        junction: {
          sqlTable: 'purchaseorders_purchaseorderitem',
          sqlJoins: [
            (skuTable, poiTable) => `${skuTable}.id = ${poiTable}.sku_id`,
            (poiTable, poTable) => `${poiTable}.po_number_id = ${poTable}.id`,
          ],
        },
        // sqlJoin: (skuTable, purchasedOrdersTable) => `${skuTable}. = ${purchasedOrdersTable}.`
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