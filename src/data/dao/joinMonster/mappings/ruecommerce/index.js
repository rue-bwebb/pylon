import Brand from 'data/dao/joinMonster/mappings/ruecommerce/types/brand';
import Product from 'data/dao/joinMonster/mappings/ruecommerce/types/product';
import ProductInfo from 'data/dao/joinMonster/mappings/ruecommerce/types/product/productInfo';
import ProductSku from 'data/dao/joinMonster/mappings/ruecommerce/types/product/productSku';
import ProductTag from 'data/dao/joinMonster/mappings/ruecommerce/types/product/productTag';
import ProductPurchaseOrder from 'data/dao/joinMonster/mappings/ruecommerce/types/product/productPurchaseOrder';
import ProductPurchaseOrderItem from 'data/dao/joinMonster/mappings/ruecommerce/types/product/productPurchaseOrderItem';
import Query from 'data/dao/joinMonster/mappings/ruecommerce/query';
import ReturnPolicy from 'data/dao/joinMonster/mappings/ruecommerce/types/returnPolicy';
import Vendor from 'data/dao/joinMonster/mappings/ruecommerce/types/vendor';

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
