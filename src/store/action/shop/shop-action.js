import {ShopActionTypes} from './shop-action-types';
import {firestore} from '../../../firebase/firebase.service';

const mapResponseData = (data) => data.map(d => ({...d.data(), id: d.id}))
    .reduce((accum, elem) => {
        const title = elem.title?.replace(/'/g, '').toLowerCase()
        accum[title] = elem
        return accum
    }, {})

// redux thunk method
export const fetchShopCollectionAsync = () => {
    return dispatch => {
        const dataRef = firestore.collection('collections')
        dispatch(fetchShopCollectionStart())
        dataRef.get()
            .then(snap => {
                dispatch(fetchShopCollectionSuccess(mapResponseData(snap.docs)))
                dispatch(fetchShopCollectionFailure(''))
            })
            .catch(ex => dispatch(fetchShopCollectionFailure(ex.message)))
    }
}
export const fetchShopCollectionStart = () => ({
    type: ShopActionTypes.FETCH_SHOP_COLLECTION_START,
})
export const fetchShopCollectionSuccess = (payload) => ({
    type: ShopActionTypes.FETCH_SHOP_COLLECTION_SUCCESS,
    payload
})
export const fetchShopCollectionFailure = (payload) => ({
    type: ShopActionTypes.FETCH_SHOP_COLLECTION_FAILURE,
    payload
})
