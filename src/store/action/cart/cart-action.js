import {CartActionTypes} from "./cart-action-types";


export const toggleDropdown = () =>( {
    type: CartActionTypes.TOGGLE_DROPDOWN
})

export const addToCart = (cartItem) =>( {
    type: CartActionTypes.ADD_TO_CART,
    payload: cartItem
})

export const removeAllFromCart = (id) =>( {
    type: CartActionTypes.REMOVE_ALL_FROM_CART,
    payload: id
})

export const removeFromCart = (id) =>( {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: id
})


