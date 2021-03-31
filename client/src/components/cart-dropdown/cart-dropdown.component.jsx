import React, { useContext } from 'react'
import CartItem from '../cart-item/cart-item.component'
import { withRouter } from 'react-router-dom'
import { CartContext } from '../../provider/cart/cart-provider'

const CartDropdown = ({ history }) => {
  const { toggleCartDropdown, cartItems } = useContext(CartContext)
  return (
    <div>
      <CartItem />
      {cartItems.some((s) => s) ? (
        <button
          className='btn btn-block btn-outline-warning'
          onClick={() => [
            history.push('/checkout'),
            toggleCartDropdown()
          ]}
        >
          GO TO CHECKOUT
        </button>
      ) : null}
    </div>
  )
}
// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems
// })
export default withRouter(CartDropdown)
