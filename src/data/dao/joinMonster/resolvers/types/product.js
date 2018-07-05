export default {
  Product: {
    // images: async function (product, args, context, info) {
    //   // TODO load from url
    //   return {
    //     default: [''],
    //   };
    // },
  },
  Products: {
    meta: (products) => products,
    objects: (products) => products,
  },
};
