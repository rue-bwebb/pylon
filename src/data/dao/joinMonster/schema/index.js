import Product from 'data/dao/joinMonster/schema/types/products';
import Query from 'data/dao/joinMonster/schema/query';

const adapter = {
  ...Query,
  ...Product,
};

export default adapter;