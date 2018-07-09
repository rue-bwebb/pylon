import joinMonster from 'join-monster';

import mysql from 'data/dao/joinMonster/dialects/mysql';
import ruecommerce from 'data/services/ruecommerce';

export default {
  Query: {
    async ats(root, args, context, info) {
      return {};
    }, // AtsList!
    async baseSort(root, args, context, info) {
      return {};
    }, // BaseSortSet!
    async boutique(root, args, context, info) {
      return {};
    }, // Boutiques!
    async boutiqueContext(root, args, context, info) {
      return {};
    }, // BoutiqueContexts!
    async boutiqueTemplate(root, args, context, info) {
      return {};
    }, // BoutiqueTemplates!
    async dayPart(root, args, context, info) {
      return {};
    }, // DayParts!
    async owners(root, args, context, info) {
      return {};
    }, // Owners!
    products: (root, args, ctx, resolveInfo) => {
      return joinMonster(resolveInfo, ctx, async (sql) => {
        const result = await ruecommerce.raw(sql);
        return result[0];
      }, { dialectModule: mysql });
    },
    async productContext(root, args, context, info) {
      return {};
    }, // ProductContexts!
    async productTemplate(root, args, context, info) {
      return {};
    }, // ProductTemplates!
    async returnPolicy(root, args, context, info) {
      return {};
    }, // ReturnPolicies!
    async search(root, args, context, info) {
      return {};
    }, // Products!
    async segment(root, args, context, info) {
      return {};
    }, // Segments!
  },
};
