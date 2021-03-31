import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/es/integration/react'
import CartProvider from './provider/cart/cart-provider'

ReactDOM.render(
  <Provider store={store}>
    <CartProvider>
      <PersistGate loading={null}
                   persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </CartProvider>
  </Provider>,
  document.getElementById('root')
)
