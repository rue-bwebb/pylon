export default {
  ProductPurchaseOrder: {
    sqlTable: 'purchaseorders_purchaseorder',
    uniqueKey: 'id',
    fields: {
      isSample: {
        sqlColumn: 'is_sample',
      },
      number: {
        sqlColumn: 'po_number',
      },
      poCreatedDate: {
        sqlColumn: 'po_created_date',
      },
      poEtaDate: {
        sqlColumn: 'po_eta_date',
      },
      vendor: {
        sqlJoin: (poTable, vendorTable) => `${poTable}.vendor_id = ${vendorTable}.id`,
      },
    },
  },
};