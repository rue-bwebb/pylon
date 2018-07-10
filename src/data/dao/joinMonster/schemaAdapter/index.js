import Product from 'data/dao/joinMonster/schemaAdapter/types/product';
import Sku from 'data/dao/joinMonster/schemaAdapter/types/sku';
import Query from 'data/dao/joinMonster/schemaAdapter/query';

const adapter = {
  ...Product,
  ...Sku,
  ...Query,
};

export default adapter;
