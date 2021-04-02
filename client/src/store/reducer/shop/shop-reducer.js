import { ShopActionTypes } from '../../action/shop/shop-action-types'

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_SHOP_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      }
    case ShopActionTypes.FETCH_SHOP_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sections: action.payload,
      }
    case ShopActionTypes.FETCH_SHOP_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    default:
      return state
  }
}
