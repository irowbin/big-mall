import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { ShopActionTypes } from '../../action/shop/shop-action-types'
import { firestore } from '../../../firebase/firebase.service'
import {
  fetchShopCollectionSuccess,
  fetchShopCollectionFailure,
} from '../../action/shop/shop-action'

// create the saga middleware
const mapApiData = (data) =>
  data
    .map((d) => ({ ...d.data(), id: d.id }))
    .reduce((accum, elem) => {
      const title = elem.title?.replace(/'/g, '').toLowerCase()
      accum[title] = elem
      return accum
    }, {})

// worker Saga: will be fired on FETCH_SHOP_COLLECTION_START actions
function* fetchShopCollectionAsync() {
  try {
    const dataRef = firestore.collection('collections')
    const snapshot = yield dataRef.get()
    const data = yield call(mapApiData, snapshot.docs)
    yield put(fetchShopCollectionSuccess(data))
  } catch (e) {
    yield put(fetchShopCollectionFailure(e.message))
  }
}
/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If 'USER_FETCH_REQUESTED' gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export function* fetchShopCollectionSaga() {
  yield takeLatest(
    ShopActionTypes.FETCH_SHOP_COLLECTION_START,
    fetchShopCollectionAsync
  )
}
