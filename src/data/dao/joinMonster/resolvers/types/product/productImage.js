import {
  ALLOWED_DIVISIONS,
  BASE_ASSET_URL,
  COLOR_KEY,
  DEFAULT_EXTENSION,
  DIVISION,
  EXPERIENCES_TYPE,
  EXTENSION_MAP,
  PRODUCT_TYPE,
  TYPE_MAPPING
} from 'data/dao/joinMonster/resolvers/constants';

/**
 * [ImageUrlBuilder description]
 */
class ImageUrlBuilder {
  url = BASE_ASSET_URL;

  /**
   * [build description]
   * @param  {[type]} product [description]
   * @return {[type]}         [description]
   */
  build(product) {
    const type = this.getImageType(product);

    this.url += `/${this.buildPrefix(product)}`;
    this.url += `/${this.buildResourceIdentifier(product)}`;
    this.url += `_${this.buildImageType(type)}`;
    this.url += this.buildColor();
    this.url += this.buildAngleSet();
    this.url += this.buildImageExtension(type);

    return this;
  }

  /**
   * [buildAngleSet description]
   * @return {[type]} [description]
   */
  buildAngleSet() {
    return '';
  }

  /**
   * [buildColor description]
   * @return {[type]} [description]
   */
  buildColor() {
    return '';
  }

  /**
   * [buildImageExtension description]
   * @param  {[type]} type [description]
   * @return {[type]}      [description]
   */
  buildImageExtension(type) {
    return (type in EXTENSION_MAP) ? EXTENSION_MAP[type] : DEFAULT_EXTENSION;
  }

  /**
   * [buildImageType description]
   * @param  {[type]} type [description]
   * @return {[type]}      [description]
   */
  buildImageType(type) {
    return TYPE_MAPPING[type];
  }

  /**
   * [buildPrefix description]
   * @param  {[type]} product [description]
   * @return {[type]}         [description]
   */
  buildPrefix(product) {
    return product.businessId.substr(0, 6);
  }

  /**
   * [buildResourceIdentifier description]
   * @param  {[type]} product [description]
   * @return {[type]}         [description]
   */
  buildResourceIdentifier(product) {
    return `${product.businessId}`;
  }

  /**
   * [getDivision description]
   * @param  {[type]} tags [description]
   * @return {[type]}      [description]
   */
  getDivision(tags) {
    const divisions = tags && tags.filter(tag => tag.group.toLowerCase() === DIVISION);
    return (divisions && divisions.length) ? divisions[0] : null;
  }

  /**
   * [getImageType description]
   * @param  {[type]} product [description]
   * @return {[type]}         [description]
   */
  getImageType(product) {
    const division = this.getDivision(product.tags);
    if (division && division.value in ALLOWED_DIVISIONS) {
      return EXPERIENCES_TYPE
    }

    return PRODUCT_TYPE;
  }

  /**
   * [toString description]
   * @return {[type]} [description]
   */
  toString() {
    return this.url;
  }
}

/**
 * [generateImageSet description]
 * @param  {[type]} product   [description]
 * @param  {[type]} numAngles [description]
 * @return {[type]}           [description]
 */
function generateImageSet(product, numAngles) {
  return !!numAngles ? Array(numAngles).fill(product) : [product];
}

/**
 * [getAllowedProductColors description]
 * @param  {[type]} product [description]
 * @return {[type]}         [description]
 */
function getAllowedProductColors(product) {
  return product.skus && product.skus.map(sku => {
    for (attribute in sku.attributes) {
      if (attribute.value.base.key === COLOR_KEY) {
        return attribute;
      }
    }

    return false;
  });
}

export default {
  ProductImage: {
    caption: function (product, args) {
      return ``;
    },
    url: function (product, args) {
      const builder = new ImageUrlBuilder();

      return builder.build(product).toString();
    },
  },
  ProductImageSet: {
    black: function (product, args) {
      // TODO only populate black if black color is in a sku attribute image_type is allowed to have black
      return generateImageSet(product, product.numAngles);
    },
    default: function (product, args) {
      return generateImageSet(product, product.numAngles);
    },
    gray: function (product, args) {
      // TODO only populate black if gray color is in a sku attribute image_type is allowed to have gray
      return generateImageSet(product, product.numAngles);
    },
  },
}