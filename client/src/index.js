import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import RootProvider from './provider/root/root-provider'
ReactDOM.render(
    <RootProvider>
        <Router>
          <App />
        </Router>
    </RootProvider>,
  document.getElementById('root')
)
