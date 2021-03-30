import React from 'react'
import { clearAllFromCart } from '../../store/action/cart/cart-action'
import { connect } from 'react-redux'
import { selectCartItems } from '../../store/selector/cart/cart-selector'
import { createStructuredSelector } from 'reselect'

const CartItem = ({ cartItems, clearAllFromCart }) => {
  return (
    <div
      className="d-flex flex-column justify-content-center"
      style={{ maxHeight: '400px', overflowY: 'auto' }}
    >
      {cartItems.some((s) => s) ? (
        cartItems.map((item) => (
          <div key={item.uuid} className="mb-3 bg-light row mx-0">
            <div className="col-md-10 px-0">
              <img
                src={item.imgUrl}
                height="50"
                width="50"
                className="rounded float-left mr-2"
                alt="product"
              />
              <div>Name: {item.name} </div>
              <div>
                ${item.price} x {item.qty}
              </div>
            </div>
            <div className="col-md-2 pr-0">
              <button
                onClick={() => clearAllFromCart(item.id)}
                className="close"
              >
                x
              </button>
            </div>
          </div>
        ))
      ) : (
        <span className="alert alert-info">Your Cart Empty</span>
      )}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})
const mapDispatchToProps = (dispatch) => ({
  clearAllFromCart: (id) => dispatch(clearAllFromCart(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
