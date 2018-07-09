import Product from 'data/dao/joinMonster/resolvers/types/product';
import ProductImage from 'data/dao/joinMonster/resolvers/types/product/productImage';
import Query from 'data/dao/joinMonster/resolvers/query';

const resolvers = {
  ...Product,
  ...ProductImage,
  ...Query,
};

export default resolvers;
