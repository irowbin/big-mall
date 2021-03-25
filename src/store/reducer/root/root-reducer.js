import {userReducer} from "../user/user-reducer";
import { combineReducers} from 'redux'
import {cartReducer} from "../cart/cart-reducer";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {directoryReducer} from "../directory/directory-reducer";
const config = {
    key: 'root',
    storage,
    whitelist:['cart']
}
const rootReducer =  combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
})

export default persistReducer(config, rootReducer)
