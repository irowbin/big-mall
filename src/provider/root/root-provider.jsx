import { createContext } from 'react'
import UserProvider from '../user/user-provider'
import CartProvider from '../cart/cart-provider'
import ShopProvider from '../shop/shop-provider'

export const RootContext = createContext({})

const RootProvider = ({ children }) => {
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
