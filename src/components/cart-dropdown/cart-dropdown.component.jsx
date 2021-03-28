import React from 'react'
import CartItem from '../cart-item/cart-item.component'
import {createStructuredSelector} from 'reselect';
import {selectCartItems} from '../../store/selector/cart/cart-selector';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {toggleDropdown} from '../../store/action/cart/cart-action';

const CartDropdown = ({cartItems, dispatch, history}) => {
    return (
        <div>
            <CartItem/>
            {
                cartItems.some(s => s)
                    ? <button className='btn btn-block btn-outline-warning'
                              onClick={()=>[history.push('/checkout'),  dispatch(toggleDropdown())]}
                    >GO TO CHECKOUT</button>
                    : null
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown))
