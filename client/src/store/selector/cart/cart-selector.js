import { createSelector } from 'reselect'

const cartSelect = (state) => state.cart

export const selectCartItems = createSelector(
  [cartSelect],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((a, b) => a + b.qty, 0) || 0
)
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((a, b) => a + b.price * b.qty, 0).toFixed(2) || 0
)
export const selectCartDropdownOpen = createSelector(
  [cartSelect],
  (cart) => cart.isDropdownOpen
)
