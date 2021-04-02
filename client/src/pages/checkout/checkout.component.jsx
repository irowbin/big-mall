import React, { useContext, useState } from 'react'
import './checkout.component.scss'
import { Link, withRouter } from 'react-router-dom'
import StripeCheckoutButton from '../../components/stripe/stripe-button.component'
import axios from 'axios'
import { CartContext } from '../../provider/cart/cart-provider'

const Checkout = () => {
  const { cartItems, totalPrice, addItem, clearFromCart, removeItem, resetCartItems } = useContext(CartContext)
  const stripePrice = totalPrice * 100
  const [response, setResponse] = useState({ errorMsg: '', successMsg: '' })
  const { errorMsg, successMsg } = response
  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: stripePrice,
        token
      }
    }).then(
      () => {
        setResponse({
          errorMsg: '',
          successMsg: <div>Payment has been successfully made. Go to <Link to={'/shop'}>shop page</Link> to add more
                           product on cart.</div>
        })
        resetCartItems()
      }
    ).catch(() => {
      setResponse({ successMsg: '', errorMsg: 'An error occurred when making payment. Please use test card info.' })
    })
  }
  return (
    <div className='container mt-5'>
      {
        errorMsg || successMsg ?
          <div className={`alert alert-${errorMsg ? 'danger' : 'success'}`}>
            {successMsg || errorMsg}
          </div>
          : null
      }
      <div className='checkout-wrap'>
        <table className='table table-borderless table-hover'>
          <thead>
          <tr>
            <th>SN</th>
            <th>Product</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
          </thead>
          <tbody>
          {cartItems.map((c) => (
            <tr key={c.id}>
              <td>
                <img src={c.imgUrl}
                     height='70'
                     width='70'
                     alt='product' />
              </td>
              <td>{c.name}</td>
              <td>{c.desc}</td>
              <td>
                <div className='d-flex'>
                  <div
                    className='h4 font-weight-bolder decrease'
                    onClick={() => removeItem(c.id)}
                  >
                    &#10096;{' '}
                  </div>
                  <div className='mx-2'>{c.qty}</div>
                  <div
                    className='h4 font-weight-bolder increase'
                    onClick={() => addItem(c)}
                  >
                    &#10095;
                  </div>
                </div>
              </td>
              <td>{c.price}</td>
              <td>
                <button
                  className='close'
                  onClick={() => clearFromCart(c.id)}
                >
                  &#10005;
                </button>
              </td>
            </tr>
          ))}
          </tbody>
          <tfoot>
          <tr>
            <td colSpan='6'>
              <div className='float-right h5 d-flex justify-content-between w-100 font-weight-bold'>
                {totalPrice > 0 ? (<>
                  <StripeCheckoutButton price={typeof (totalPrice) ==='number' ? totalPrice?.toFixed(2) : totalPrice}
                                        onToken={onToken} />
                  <span>Total: ${totalPrice} </span>
                </>) : null
                }
              </div>

            </td>
          </tr>
          </tfoot>
        </table>
        {
          successMsg ?
            <>
              <div className='text-danger col'>
                <div className='mb-2'>Please use test card info from below.</div>
                <div>Card No: <b>4242 4242 4242 4242</b></div>
                <div>Date: <b> {new Date().getUTCMonth() + 1} / {new Date().getFullYear().toString().substr(2)}</b></div>
                <div>CVC: <b>123</b></div>
              </div>
            </>
            : null
        }

      </div>
    </div>
  )
}
// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   cartTotal: selectCartTotal
// })
export default withRouter(Checkout)
