import { CartActionTypes } from '../../action/cart/cart-action-types'

const INITIAL_STATE = {
  isDropdownOpen: false,
  cartItems: []
}

/**
 * Groups repeated item to one and increases qty
 * @param all
 * @param payload
 * @returns {*[]|*}
 */
const normalizedItems = (all, payload) => {
  const item = all.find((a) => a.id === payload.id)
  if (item) {
    return all.map((el) =>
      el.id === payload.id ? { ...payload, qty: el.qty + 1 } : el
    )
  }
  return [...all, { ...payload, qty: 1 }]
}
/**
 * Decrease the qty by one
 * @param all
 * @param id
 * @returns {*[]|*}
 */
const decrease = (all, id) => {
  const found = all.find((a) => a.id === id)
  if (found.qty === 1) {
    return all.filter((a) => a.id !== found.id)
  }
  return [
    ...all.map((a) => ({
      ...a,
      qty: a.id === found.id ? found.qty - 1 : a.qty
    }))
  ]
}
export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_DROPDOWN:
      return {
        ...state,
        isDropdownOpen: !state.isDropdownOpen
      }
    case CartActionTypes.ADD_TO_CART: {
      return {
        ...state,
        cartItems: normalizedItems(state.cartItems, action.payload)
      }
    }
    case CartActionTypes.Clear_ALL_FROM_CART:
      return {
        ...state,
        cartItems: [...state.cartItems.filter((c) => c.id !== action.payload)]
      }
    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: decrease(state.cartItems, action.payload)
      }
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }
    default:
      return state
  }
}
