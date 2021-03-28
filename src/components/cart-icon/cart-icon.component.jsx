import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg'
import './cart-icon.component.scss'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../store/selector/cart/cart-selector'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({ itemCount }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount ?? 0}</span>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})
export default connect(mapStateToProps)(CartIcon)
