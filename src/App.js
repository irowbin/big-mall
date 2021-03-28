import React, { Suspense, Component, lazy } from 'react'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.scss'
// components
import { selectCurrentUser } from './store/selector/user/user-selector'
import ShopPage from './pages/shop/shop-page.component'
import Spinner from './components/spinner/spinner.component'
import Navbar from './pages/navbar/navbar.component'
import { checkUserSession } from './store'

// lazy  components
const HowToPage = lazy(() => import('./pages/how-to/how-to-page.component'))
const AccountPage = lazy(() => import('./pages/account/account.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))
const HomePage = lazy(() => import('./pages/homepage/homepage.component'))

class App extends Component {
  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()
  }

  render() {
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
                  this.props.currentUser ? <Redirect to='/' /> : <AccountPage />
                }
              />
            </Switch>
          </Suspense>
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
