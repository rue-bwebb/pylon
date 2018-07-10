import Brand from 'data/dao/joinMonster/schemaAdapter/types/brand';
import Product from 'data/dao/joinMonster/schemaAdapter/types/product';
import ProductInfo from 'data/dao/joinMonster/schemaAdapter/types/product/productInfo';
import ProductTag from 'data/dao/joinMonster/schemaAdapter/types/product/productTag';
import ReturnPolicy from 'data/dao/joinMonster/schemaAdapter/types/returnPolicy';
import Sku from 'data/dao/joinMonster/schemaAdapter/types/sku';
import Query from 'data/dao/joinMonster/schemaAdapter/query';

const adapter = {
  ...Brand,
  ...Product,
  ...ProductInfo,
  ...ProductTag,
  ...ReturnPolicy,
  ...Sku,
  ...Query,
};

export default adapter;
