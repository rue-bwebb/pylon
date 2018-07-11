import Brand from 'data/dao/joinMonster/schemaAdapter/types/brand';
import Product from 'data/dao/joinMonster/schemaAdapter/types/product';
import ProductInfo from 'data/dao/joinMonster/schemaAdapter/types/product/productInfo';
import ProductSku from 'data/dao/joinMonster/schemaAdapter/types/product/productSku';
import ProductTag from 'data/dao/joinMonster/schemaAdapter/types/product/productTag';
import ProductPurchaseOrder from 'data/dao/joinMonster/schemaAdapter/types/product/productPurchaseOrder';
import ProductPurchaseOrderItem from 'data/dao/joinMonster/schemaAdapter/types/product/productPurchaseOrderItem';
import Query from 'data/dao/joinMonster/schemaAdapter/query';
import ReturnPolicy from 'data/dao/joinMonster/schemaAdapter/types/returnPolicy';
import Vendor from 'data/dao/joinMonster/schemaAdapter/types/vendor';

const adapter = {
  ...Brand,
  ...Product,
  ...ProductInfo,
  ...ProductSku,
  ...ProductTag,
  ...ProductPurchaseOrder,
  ...ProductPurchaseOrderItem,
  ...Query,
  ...ReturnPolicy,
  ...Vendor,
};

export default adapter;
