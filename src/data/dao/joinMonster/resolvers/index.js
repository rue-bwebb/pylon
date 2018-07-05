import Product from 'data/dao/joinMonster/resolvers/types/product';
import Query from 'data/dao/joinMonster/resolvers/query';

const resolvers = {
  ...Product,
  ...Query
};

export default resolvers;
