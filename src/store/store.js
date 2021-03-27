import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './reducer/root/root-reducer'
import fetchShopCollectionSaga from './saga/shop/shop-saga'
import {persistStore} from 'redux-persist'
const sagaMiddleware = createSagaMiddleware()
const middlewares = [thunk, sagaMiddleware]
if (process.env.MODE_ENV === 'development'){
    middlewares.push(logger)
}
const store  = createStore(rootReducer,applyMiddleware(...middlewares))
const persistor = persistStore(store)
// then run the saga
// sagaMiddleware.run(fetchShopCollectionSaga)
export  {store, persistor}
