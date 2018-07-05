import joinMonster from 'join-monster';

import ruecommerce from 'data/services/ruecommerce';

export default {
  Query: {
    ats: async function (root, args, context, info) {
      return {};
    }, // AtsList!
    baseSort: async function (root, args, context, info) {
      return {};
    }, // BaseSortSet!
    boutique: async function (root, args, context, info) {
      return {};
    }, // Boutiques!
    boutiqueContext: async function (root, args, context, info) {
      return {};
    }, // BoutiqueContexts!
    boutiqueTemplate: async function (root, args, context, info) {
      return {};
    }, // BoutiqueTemplates!
    dayPart: async function (root, args, context, info) {
      return {};
    }, // DayParts!
    owners: async function (root, args, context, info) {
      return {};
    }, // Owners!
    product: (root, args, ctx, resolveInfo) => {
      return joinMonster(resolveInfo, ctx, async (sql) => {
        const result = await ruecommerce.raw(sql);
        return result[0];
      }, { dialect: 'mysql' });
    },
    productContext: async function (root, args, context, info) {
      return {};
    }, // ProductContexts!
    productTemplate: async function (root, args, context, info) {
      return {};
    }, // ProductTemplates!
    returnPolicy: async function (root, args, context, info) {
      return {};
    }, // ReturnPolicies!
    search: async function (root, args, context, info) {
      return {};
    }, // Products!
    segment: async function (root, args, context, info) {
      return {};
    }, // Segments!
  },
};
