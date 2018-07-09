import Product from 'data/dao/joinMonster/schemaAdapter/types/product';
import Query from 'data/dao/joinMonster/schemaAdapter/query';

const adapter = {
  ...Query,
  ...Product,
};

export default adapter;
