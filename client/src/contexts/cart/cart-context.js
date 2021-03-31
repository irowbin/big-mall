import {createContext} from 'react'

const INITIAL_VALUE = {
  isDropdownOpen: false,
  cartItems: [],
  toggleCartDropdown: () =>{}
}

const CartContext = createContext(INITIAL_VALUE)

export default CartContext
