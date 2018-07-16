import Product from 'api/graphql/resolvers/types/product';
import ProductImage from 'api/graphql/resolvers/types/product/productImage';
import Query from 'api/graphql/resolvers/query';

const resolvers = {
  ...Product,
  ...ProductImage,
  ...Query,
};

export default resolvers;
