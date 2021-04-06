import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import RootProvider from './provider/root/root-provider'
import { ApolloProvider, ApolloClient, InMemoryCache, gql } from '@apollo/client'


const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  uri: 'todo'
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <RootProvider>
      <Router>
        <App />
      </Router>
    </RootProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
