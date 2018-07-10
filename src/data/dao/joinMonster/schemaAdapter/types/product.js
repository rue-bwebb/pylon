export default {
  Product: {
    sqlTable: 'products_product',
    uniqueKey: 'id',
    fields: {
      active: {
        sqlColumn: 'active',
      },
      // attributes: {},
      brand: {
        sqlJoin: (productsTable, brandsTable) => `${productsTable}.brand_id = ${brandsTable}.id`,
      },
      businessId: {
        sqlColumn: 'business_id',
      },
      forceSoldOut: {
        sqlColumn: 'force_sold_out',
      },
      info: {
        sqlJoin: (productsTable, infoTable) => `${productsTable}.id = ${infoTable}.product_id`,
      },
      isExperience: {
        sqlColumn: 'is_experience',
      },
      longDescription: {
        sqlColumn: 'long_description',
      },
      name: {
        sqlColumn: 'name',
      },
      numAngles: {
        sqlColumn: 'num_angles',
      },
      originalName: {
        sqlColumn: 'original_name',
      },
      // productContexts: {
      //   sqlJoin: (productsTable, productContextsTable) => ``,
      // },
      returnPolicy: {
        sqlJoin: (productsTable, returnPoliciesTable) => `${productsTable}.return_policy_id = ${returnPoliciesTable}.id`,
      },
      shortDescription: {
        sqlColumn: 'short_description',
      },
      showMsrp: {
        sqlColumn: 'show_msrp',
      },
      showReturnPolicy: {
        sqlColumn: 'show_return_policy',
      },
      skus: {
        sqlJoin: (productsTable, skusTable) => `${productsTable}.id = ${skusTable}.product_id`,
      },
      tags: {
        junction: {
          sqlTable: 'products_product_tags',
          sqlJoins: [
            (productsTable, junctionTable, args) => `${productsTable}.id = ${junctionTable}.product_id`,
            (junctionTable, tagsTable, args) => `${junctionTable}.producttag_id = ${tagsTable}.id`,
          ],
        },
      },
    },
  },
};
