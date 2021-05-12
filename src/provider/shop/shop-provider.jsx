import { createContext, useEffect, useMemo, useReducer } from 'react'
import { shopReducer } from '../../store/reducer/shop/shop-reducer'
import {fetchShopCollectionSuccess,fetchShopCollectionFailure} from '../../store/action/shop/shop-action'
import { firestore } from '../../firebase/firebase.service'
const INITIAL_STATE = {
  sections: null,
  isFetching: false,
  errorMessage: ''
}
export const ShopContext = createContext(INITIAL_STATE)
// create the saga middleware
const mapApiData = (data) =>
  data
    .map((d) => ({ ...d.data(), id: d.id }))
    .reduce((accum, elem) => {
      const title = elem.title?.replace(/'/g, '').toLowerCase()
      accum[title] = elem
      return accum
    }, {})

const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, INITIAL_STATE)
  const store = useMemo(() => ({state, dispatch}), [state, dispatch])
  const {isFetching} = store.state
  useEffect(()=>{
    if(!isFetching) return
    const fetchCollection = async () =>{
      try {
        const dataRef = firestore.collection('collections')
        const snapshot = await dataRef.get()
        const data = mapApiData(snapshot.docs)
        dispatch(fetchShopCollectionSuccess(data))
      } catch (e) {
        dispatch(fetchShopCollectionFailure(e))
      }
    }
    fetchCollection()
  }, [isFetching])
  // TODO handle async
  return (
    <ShopContext.Provider
      value={{ ...store }}>
      {children}
    </ShopContext.Provider>
  )
}
export default ShopProvider
