import { all, call } from 'redux-saga/effects'

import { shopSaga } from '../shop/shop-saga'
import { userSignInSaga } from '../user/user-sign-in-saga'
import { cartSaga } from '../cart/cart-saga'
import { signupSaga } from '../user/user-sign-up-saga'
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(shopSaga),
    call(userSignInSaga),
    call(cartSaga),
    call(signupSaga)
  ])
}
