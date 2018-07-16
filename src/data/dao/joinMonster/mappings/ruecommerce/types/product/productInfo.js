export default {
  ProductInfo: {
    sqlTable: 'products_productinfo',
    uniqueKey: 'id',
    fields: {
      checkOffCompleteDate: {
        sqlColumn: 'check_off_complete_date',
      },
      featureComplete: {
        sqlColumn: 'feature_complete',
      },
      featureCompleteDate: {
        sqlColumn: 'feature_complete_date',
      },
      imagingCompleteDate: {
        sqlColumn: 'imaging_complete_date',
      },
      note: {
        sqlColumn: 'notes',
      },
      photoCompleteDate: {
        sqlColumn: 'photo_complete_date',
      },
      sampleReceivedDate: {
        sqlColumn: 'sample_received_date',
      },
    },
  },
};