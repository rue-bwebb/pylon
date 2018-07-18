import { createRuecommerceResolver } from 'data/dao/joinMonster';

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
    products(root, args, context, info) {
      const resolver = createRuecommerceResolver();
      return resolver(context, info);
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
