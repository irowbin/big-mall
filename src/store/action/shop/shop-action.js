import { ShopActionTypes } from './shop-action-types'

export const fetchShopCollectionStart = () => ({
  type: ShopActionTypes.FETCH_SHOP_COLLECTION_START,
})
export const fetchShopCollectionSuccess = (payload) => ({
  type: ShopActionTypes.FETCH_SHOP_COLLECTION_SUCCESS,
  payload,
})
export const fetchShopCollectionFailure = (payload) => ({
  type: ShopActionTypes.FETCH_SHOP_COLLECTION_FAILURE,
  payload,
})
