import {all, call, takeLatest, put} from 'redux-saga/effects'
import { clearCart } from '../../action/cart/cart-action'
import { UserActionTypes } from '../../action/user/user-action-types'

export function* clearCartOnSignOut(){
  yield put(clearCart())
}

export function* onSignOutSuccess(){
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSaga(){
  yield all([call(onSignOutSuccess)])
}
