import React, { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg'
import './cart-icon.component.scss'
import { CartContext } from '../../provider/cart/cart-provider'

const CartIcon = () => {
  const {cartCounts} = useContext(CartContext)
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCounts}</span>
    </div>
  )
}
// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount,
// })
export default CartIcon
