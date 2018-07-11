export default {
  ProductPurchaseOrderItem: {
    sqlTable: 'purchaseorders_purchaseorderitem',
    uniqueKey: 'id',
    fields: {
      cost: {
        sqlColumn: 'cost',
      },
      ruecolor: {
        sqlColumn: 'ruecolor',
      },
      size: {
        sqlColumn: 'size',
      },
      skuNumber: {
        sqlColumn: 'vendorsku',
      },
      vendorColor: {
        sqlColumn: 'vendorcolor',
      },
    },
  },
};