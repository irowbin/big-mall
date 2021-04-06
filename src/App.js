import React, { Suspense, lazy, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.scss'
// components
import ShopPage from './pages/shop/shop-page.component'
import Spinner from './components/spinner/spinner.component'
import Navbar from './pages/navbar/navbar.component'
import Toast from './components/toast/toast.component'

// lazy  components
const HowToPage = lazy(() => import('./pages/how-to/how-to-page.component'))
const AccountPage = lazy(() => import('./pages/account/account.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))
const HomePage = lazy(() => import('./pages/homepage/homepage.component'))

const App = ({ checkUserSession, currentUser }) => {
  // useEffect(() => {
  //   checkUserSession()
  // }, [checkUserSession])
  return (
    <div className='container-fluid px-0'>
      <Navbar />
      <div className='d-block fix-top-space'>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact
                   path='/'
                   component={HomePage} />
            <Route path='/how-to'
                   component={HowToPage} />
            <Route path='/shop'
                   component={ShopPage} />
            <Route path='/checkout'
                   component={CheckoutPage} />
            <Route
              path='/account'
              render={() =>
                currentUser ? <Redirect to='/' /> : <AccountPage />
              }
            />
          </Switch>
        </Suspense>
      </div>
      <Toast  />
    </div>
  )
}
//
// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser
// })
// const mapDispatchToProps = dispatch => ({
//   checkUserSession: () => dispatch(checkUserSession())
// })
export default App
