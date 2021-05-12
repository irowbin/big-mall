import React, { useContext, useMemo } from 'react'
import CartItem from '../cart-item/cart-item.component'
import { withRouter } from 'react-router-dom'
import { CartContext } from '../../provider'

const CartDropdown = ({ history }) => {
  const { toggleCartDropdown, hasCartItems } = useContext(CartContext)
  return useMemo(() =>(
    <div>
      <CartItem />
      {hasCartItems ? (
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
  ),[hasCartItems, toggleCartDropdown, history])
}
// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems
// })
export default withRouter(CartDropdown)
