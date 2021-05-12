import React, { createContext, useReducer } from 'react'
import UserProvider from '../user/user-provider'
import CartProvider from '../cart/cart-provider'
import ShopProvider from '../shop/shop-provider'
// const rootReducer = () =>{}
export const RootContext = createContext({})

const RootProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(rootReducer, {})
  // const store = React.useMemo(() => ({ state, dispatch }), [state])
  return (
    <UserProvider>
      <ShopProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </ShopProvider>
    </UserProvider>
  )
}
export default RootProvider
