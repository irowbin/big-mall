import {userReducer} from '../user/user-reducer';
import { combineReducers} from 'redux'
import {cartReducer} from '../cart/cart-reducer';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {shopReducer} from '../shop/shop-reducer';
const config = {
    key: 'root',
    storage,
    whitelist:['cart']
}
const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer
})

export default persistReducer(config, rootReducer)
