export default {
  PagingMeta: {
    count: function (root, args, context, info) {
      return Array.isArray(root) ? root.length : 1;
    }, // Int!
  },
};