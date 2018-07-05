export default {
  PagingMeta: {
    count: (root) => Array.isArray(root) ? root.length : 1;
  },
};