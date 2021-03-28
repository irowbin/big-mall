import {call, put, takeEvery, takeLatest,} from 'redux-saga/effects'
import {ShopActionTypes} from '../../action/shop/shop-action-types'
import {firestore} from '../../../firebase/firebase.service';

import {
    fetchShopCollectionFailure,
    fetchShopCollectionStart,
    fetchShopCollectionSuccess
} from '../../action/shop/shop-action';

// create the saga middleware

function* fetchDataFromApi() {
    const dataRef = firestore.collection('collections')
    // dispatch(fetchShopCollectionStart())
    yield dataRef.get()
        .then(snap => {
            const data = snap.docs.map(d => ({...d.data(), id: d.id}))
                .reduce((accum, elem) => {
                    const title = elem.title?.replace(/'/g, '').toLowerCase()
                    accum[title] = elem
                    return accum
                }, {})
            console.log(data)
            return data
            // dispatch(fetchShopCollectionSuccess(data))
            //  dispatch(fetchShopCollectionFailure(''))
        })
        .catch(ex => ex.message)
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchShopCollection(action) {
    try {
        const data = yield call(fetchDataFromApi);
        yield put({type: ShopActionTypes.FETCH_SHOP_COLLECTION_SUCCESS, payload: data});
    } catch (e) {
        yield put({type: ShopActionTypes.FETCH_SHOP_COLLECTION_FAILURE, message: e.message});
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//     yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If 'USER_FETCH_REQUESTED' gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* fetchShopCollectionSaga() {
    yield takeLatest(ShopActionTypes.FETCH_SHOP_COLLECTION_START, fetchShopCollection);
}

export default fetchShopCollectionSaga;
