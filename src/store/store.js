import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './reducer/root/root-reducer'
import rootSaga from './saga/root/root-saga'
import { persistStore } from 'redux-persist'
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}
const store = createStore(rootReducer, applyMiddleware(...middlewares))
const persistor = persistStore(store)
// then run the saga
sagaMiddleware.run(rootSaga)
export { store, persistor }
