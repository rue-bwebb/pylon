export const ALLOWED_DIVISIONS = ['Experiences', 'National'];
export const BASE_ASSET_URL = '//asset1.ruecdn.com/images/product';
export const COLOR_KEY = 'color';
export const DEFAULT_EXTENSION = '.jpg';
export const DIVISION = 'division';
export const EXPERIENCES_TYPE = 'EXPERIENCES_DETAIL';
export const EXTENSION_MAP = {
  'PROGRAM_DETAIL': '.png',
  'HOVER_IMAGE': '.png',
  'EVENT_HEADER': '.gif',
  'MOBILE_LOOKBOOK': '.gif',
  'BOUTIQUE_DOOR_ANIMATION': '.gif',
}
export const PRODUCT_TYPE = 'PRODUCT_DETAIL';
export const TYPE_MAPPING = {
  'BILLBOARD_DOOR': 'doorbb',
  'LARGE_DOOR': 'doorlg',
  'TALL_DOOR': 'doortall',
  'SMALL_DOOR': 'doorsm',
  'MINI_DOOR': 'doormini',
  'TABLET_DOOR': 'tablet_door',
  'HALF_DOOR_FILLER': 'img_halfdoor_filler',
  'LOCAL_DOOR': 'localdoor',
  'TODAYS_FIX_DOOR': 'doorfix',
  'BOUTIQUE_GUTTERS': 'bkgevent',
  'SECTION_GUTTERS': 'bkgspotlight',
  'EVENT_HEADER': 'hdr',
  'APPAREL_CHILD_PRODUCT': 'RLLC',
  'MULTI_BRAND_BANNER': 'multibanner',
  'PRODUCT_DETAIL_NEXT': 'RLLN',
  'EXPERIENCES_PRODUCT': 'RLLNE',
  // these all take angles
  'PRODUCT_DETAIL': 'RLLD_',
  'PRODUCT_DETAIL_ALT': 'RLLA_',
  'PRODUCT_ZOOM': 'RLLZ_',
  'CHILD_EXPERIENCES': 'RLLCE_',
  'CHILD_EXPERIENCES_NO_ZOOM': 'RLLCE_',
  'EXPERIENCES_DETAIL': 'RLLDE_',
  'EXPERIENCES_DETAIL_ALT': 'RLLAE_',
  // lookbook type mappings don't match the URL path segment (lookbook)
  'LOOK_BOOK_BOUTIQUE': 'lookbook_boutique',
  'LOOK_BOOK_STYLE': 'lookbook_product',
  // hover images for rue365
  'HOVER_IMAGE': 'hover',
  'PROGRAM_DETAIL': 'RLLD',
  // mobile boutiques
  'MOBILE_DOOR': 'mobile_door',
  'MOBILE_DOOR_LARGE': 'mobile_doorlg',
  'BOUTIQUE_DOOR_ANIMATION': 'boutique_door_anim',
  'BANNER_TABLET_DOOR': 'banner_tablet',
  'BANNER_TABLET_DOOR_HR': 'banner_tablet_hires',
  'BOUTIQUE_TABLET_DOOR': 'boutique_tablet',
  'BOUTIQUE_TABLET_DOOR_HR': 'boutique_tablet_hires',
  // mobile products
  'MOBILE_APPAREL_CHILD_PRODUCT': 'RLLCM_',
  'TABLET_APPAREL_CHILD_PRODUCT': 'RLLCT_',
  'TABLET_APPAREL_CHILD_PRODUCT_HR': 'RLLCTH_',
  // mobile experience products
  'MOBILE_APPAREL_CHILD_EXPERIENCE_PRODUCT': 'RLLCEM_',
  'TABLET_APPAREL_CHILD_EXPERIENCE_PRODUCT': 'RLLCET',
  'TABLET_APPAREL_CHILD_EXPERIENCE_PRODUCT_HR': 'RLLCETH',
  // mobile product detail
  'TABLET_PRODUCT_DETAIL': 'RLLDT_',
  'TABLET_PRODUCT_ZOOM': 'RLLZT_',
  'TABLET_PRODUCT_DETAIL_HR': 'RLLDTH_',
  'TABLET_PRODUCT_ZOOM_HR': 'RLLZTH_',
  'TABLET_PRODUCT_DETAIL_ALT': 'RLLAT_',
  'TABLET_PRODUCT_DETAIL_ALT_HR': 'RLLATH_',
  // mobile experience product detail
  'TABLET_EXPERIENCE_PRODUCT_DETAIL': 'RLLDET_',
  'TABLET_EXPERIENCE_PRODUCT_ZOOM': 'RLLZET_',
  'TABLET_EXPERIENCE_PRODUCT_DETAIL_HR': 'RLLDETH_',
  'TABLET_EXPERIENCE_PRODUCT_ZOOM_HR': 'RLLZETH_',
  'TABLET_EXPERIENCE_PRODUCT_DETAIL_ALT': 'RLLAET_',
  'TABLET_EXPERIENCE_PRODUCT_DETAIL_ALT_HR': 'RLLAETH_',
  // mobile lookbooks
  'MOBILE_LOOKBOOK': 'brandmobi',
  'TABLET_LOOKBOOK': 'preview_tablet',
  'TABLET_LOOKBOOK_HR': 'preview_tablet_hires',
}

export const TYPES_THAT_ACCEPT_AN_ANGLE_SET = [
  TYPE_MAPPING['PRODUCT_DETAIL'],
  TYPE_MAPPING['PRODUCT_DETAIL_ALT'],
  TYPE_MAPPING['PRODUCT_ZOOM'],
  TYPE_MAPPING['CHILD_EXPERIENCES'],
  TYPE_MAPPING['EXPERIENCES_DETAIL'],
  TYPE_MAPPING['EXPERIENCES_DETAIL_ALT'],
  TYPE_MAPPING['MOBILE_APPAREL_CHILD_PRODUCT'],
  TYPE_MAPPING['TABLET_APPAREL_CHILD_PRODUCT'],
  TYPE_MAPPING['TABLET_APPAREL_CHILD_PRODUCT_HR'],
  TYPE_MAPPING['TABLET_PRODUCT_DETAIL'],
  TYPE_MAPPING['TABLET_PRODUCT_ZOOM'],
  TYPE_MAPPING['TABLET_PRODUCT_DETAIL_HR'],
  TYPE_MAPPING['TABLET_PRODUCT_ZOOM_HR'],
  TYPE_MAPPING['TABLET_PRODUCT_DETAIL_ALT'],
  TYPE_MAPPING['TABLET_PRODUCT_DETAIL_ALT_HR'],
  TYPE_MAPPING['TABLET_EXPERIENCE_PRODUCT_DETAIL'],
  TYPE_MAPPING['TABLET_EXPERIENCE_PRODUCT_ZOOM'],
  TYPE_MAPPING['TABLET_EXPERIENCE_PRODUCT_DETAIL_HR'],
  TYPE_MAPPING['TABLET_EXPERIENCE_PRODUCT_ZOOM_HR'],
  TYPE_MAPPING['TABLET_EXPERIENCE_PRODUCT_DETAIL_ALT'],
  TYPE_MAPPING['TABLET_EXPERIENCE_PRODUCT_DETAIL_ALT_HR'],
  TYPE_MAPPING['MOBILE_APPAREL_CHILD_EXPERIENCE_PRODUCT'],
];

export const TYPES_THAT_ACCEPT_A_COLOR = [
  TYPE_MAPPING['PRODUCT_DETAIL'],
  TYPE_MAPPING['PRODUCT_DETAIL_ALT'],
  TYPE_MAPPING['TABLET_PRODUCT_DETAIL'],
  TYPE_MAPPING['TABLET_PRODUCT_DETAIL_ALT'],
  TYPE_MAPPING['TABLET_PRODUCT_DETAIL_ALT_HR'],
  TYPE_MAPPING['TABLET_PRODUCT_DETAIL_HR'],
  TYPE_MAPPING['PRODUCT_ZOOM'],
  TYPE_MAPPING['CHILD_EXPERIENCES'],
  TYPE_MAPPING['EXPERIENCES_DETAIL'],
  TYPE_MAPPING['EXPERIENCES_DETAIL_ALT'],
  TYPE_MAPPING['MOBILE_APPAREL_CHILD_PRODUCT'],
  TYPE_MAPPING['TABLET_APPAREL_CHILD_PRODUCT'],
  TYPE_MAPPING['TABLET_APPAREL_CHILD_PRODUCT_HR'],
];
