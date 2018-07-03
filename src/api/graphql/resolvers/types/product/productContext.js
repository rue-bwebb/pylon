type ProductContext {
  baseSort: Int!
  boutiqueContext: String!
  lowInventoryLimit: Int!
  maxPerCart: Int!
  pk: Int!
  product: String!
  productGroupContext: ProductGroupContext
  skus: [String]!
}
