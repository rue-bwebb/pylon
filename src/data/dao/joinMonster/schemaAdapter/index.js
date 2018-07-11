import Brand from 'data/dao/joinMonster/schemaAdapter/types/brand';
import Product from 'data/dao/joinMonster/schemaAdapter/types/product';
import ProductInfo from 'data/dao/joinMonster/schemaAdapter/types/product/productInfo';
import ProductSku from 'data/dao/joinMonster/schemaAdapter/types/product/productSku';
import ProductTag from 'data/dao/joinMonster/schemaAdapter/types/product/productTag';
import PurchaseOrder from 'data/dao/joinMonster/schemaAdapter/types/purchaseOrder';
import ReturnPolicy from 'data/dao/joinMonster/schemaAdapter/types/returnPolicy';
import Query from 'data/dao/joinMonster/schemaAdapter/query';

const adapter = {
  ...Brand,
  ...Product,
  ...ProductInfo,
  ...ProductSku,
  ...ProductTag,
  ...PurchaseOrder,
  ...ReturnPolicy,
  ...Query,
};

export default adapter;
