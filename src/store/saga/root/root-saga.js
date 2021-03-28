import { all, call } from 'redux-saga/effects'

import { fetchShopCollectionSaga } from '../shop/shop-saga'
import { userSaga } from '../user/user-saga'
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([call(fetchShopCollectionSaga), call(userSaga)])
}
