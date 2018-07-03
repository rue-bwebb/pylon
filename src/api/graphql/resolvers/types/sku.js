type Sku {
  active: Boolean!
  activeVendor: ActiveVendor
  attributes: [SkuAttribute]!
  completeResourceUri: String!
  features: String!
  fulfillmentMethod: String!
  highlights: String!
  listPrice: String!
  msrp: String!
  purchaseOrderItems: [PurchaseOrderItem]!
  purchaseOrders: [PurchaseOrder]!
  shippingUpcharge: String!
  skuNumber: String!
  termsAndConditions: String!
  upc: String!
  _id: String!
}
