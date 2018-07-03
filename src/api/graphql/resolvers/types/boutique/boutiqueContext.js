type BoutiqueContext {
  backOrderEnabled: Boolean!
  boutique: String!
  boutiqueTemplate: [BoutiqueTemplate]!
  defaultProductTemplate: [ProductTemplate]!
  eventEta: String
  invisibleSegments: [BoutiqueSegment]!
  lowInventoryLimit: Int!
  maxPerCart: Int!
  minPerCart: Int!
  pk: Int!
  productTagLevel: String!
  returnPolicy: String!
  showMsrp: Boolean!
  siteContext: BoutiqueSiteContext
  sortSoldoutToBottom: Boolean!
  visibleSegments: [BoutiqueSegment]!
}
