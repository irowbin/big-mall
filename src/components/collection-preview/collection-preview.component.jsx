import React, { useContext } from 'react'
import './collection-preview.component.scss'
import { withRouter } from 'react-router-dom'
import { CartContext } from '../../provider/cart/cart-provider'
const CollectionPreview = ({ title, items,  match }) => {
  const {addItem} = useContext(CartContext)
  return (
    <div className={'row mt-2 mb-5'}>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <div
              className="alert alert-primary bg-transparent  border-0 h2 px-0 py-1"
              role="alert"
            >
              {title}
            </div>
          </div>
        </div>
        <div className="row">
          {items.some((s) => s) ? (
            items.map((item, index) => (
              <div
                key={item.id}
                className={`mb-5 ${
                  match?.params?.collectionId ? 'col-md-4' : 'col-md-3'
                }`}
              >
                <div className="card" style={{ height: '240px' }}>
                  <img
                    className="card-img"
                    src={item.imgUrl}
                    alt="Bologna"
                    style={{ height: '100%' }}
                    crossOrigin={'anonymous'}
                  />
                  <div className="card-img-overlay text-center text-white d-flex flex-column justify-content-center align-items-center">
                    <div className="card-title item-desc"> {item.name}</div>
                    <div
                      className="w-50 menu-button mt-2"
                      onClick={() => addItem(item)}
                    >
                      Add To Cart
                    </div>
                  </div>
                  <div className="item-price">Price: ${item.price}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="alert alert-secondary">Out of stock!</div>
          )}
        </div>
      </div>
    </div>
  )
}
// const mapDispatchToProps = (dispatch) => ({
//   addToCart: (cartItem) => dispatch(addToCart(cartItem)),
// })
export default withRouter(CollectionPreview)
