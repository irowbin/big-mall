import React, { createContext, useState, useEffect } from 'react'

const INITIAL_VALUE = {
  isDropdownOpen: false,
  cartItems: [],
  toggleCartDropdown: () => {},
  addItem: () => {},
  removeItem: () => {},
  clearFromCart: () => {
  },
  resetCartItems: () =>{},
  cartCounts: 0,
  totalPrice: 0
}

export const CartContext = createContext(INITIAL_VALUE)


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

const CartProvider = ({ children }) => {

  const [isDropdownOpen, setToggleDropdown] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCounts, setCartCounts] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const toggleCartDropdown = () => setToggleDropdown(!isDropdownOpen)
  const addItem = item => setCartItems(normalizedItems(cartItems, item))
  const clearFromCart = id => setCartItems([...cartItems.filter((c) => c.id !== id)])
  const removeItem = id => setCartItems(decrease(cartItems, id))
  const resetCartItems = () => setCartItems([])

  useEffect(() => {
    setCartCounts(cartItems.reduce((a, b) => a + b.qty, 0))
    setTotalPrice(cartItems.reduce((a,b)=> (a+b.price *b.qty),0).toFixed(2))
  }, [cartItems])

  return (
    <CartContext.Provider value={{
      isDropdownOpen,
      toggleCartDropdown,
      addItem,
      removeItem,
      cartItems,
      cartCounts,
      clearFromCart,
      totalPrice,
      resetCartItems
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
