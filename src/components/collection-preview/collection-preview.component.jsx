import React from 'react'
import {connect} from "react-redux";
import {addToCart} from "../../store/action/cart/cart-action";
 const CollectionPreview = ({title, items, addToCart}) => {
    return (
        <div className="row">
            <div className='col-md-12'>
                <div className="row">
                    <div className='col-md-12'>
                        <div className="alert alert-primary bg-transparent  border-0 h2 px-0 py-1"
                             role="alert">
                            {title}
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        items.map((item, index) =>
                            <div key={item.id}
                                 className="col-md-4 mb-4">
                                <div className=" card"
                                     style={{height: '250px'}}>
                                    <img className="card-img"
                                         src={item.imgUrl}
                                         alt="Bologna"
                                         style={{height: '100%'}}/>
                                    <div className="card-img-overlay text-center text-white d-flex flex-column justify-content-center align-items-center">
                                        <div className="bg-light text-danger w-50  img-thumbnail"> {item.name}</div>
                                        <button className="btn w-50 btn-outline-danger mt-2"
                                        onClick={()=>addToCart(item)}>
                                            Add To Cart ${(index + 1)}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    addToCart: cartItem => dispatch(addToCart(cartItem))
})
export default connect(null,mapDispatchToProps)(CollectionPreview)
