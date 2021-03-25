import './App.scss';
import React, {Suspense, Component, lazy} from 'react'
import {HomePage} from './pages/homepage/homepage.component'
import Navbar from './pages/navbar/navbar.component'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {auth, createAuthenticatedUserProfile} from './firebase/firebase.service'
import {connect} from 'react-redux'
import './App.scss'
import {setCurrentUser} from './store'
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./store/selector/user/user-selector";
import ShopPage from './pages/shop/shop-page.component'

// lazy  components
const HowToPage = lazy(() => import('./pages/how-to/how-to-page.component'))
const AccountPage = lazy(() => import('./pages/account/account.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))

class App extends Component {

    componentDidMount() {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef = await createAuthenticatedUserProfile(user)
                userRef.onSnapshot(snapShot => {
                    this.props.setCurrentUser({id: snapShot.id, ...snapShot.data()})
                })

            } else {
                this.props.setCurrentUser(user)
            }
        })
    }

    render() {
        return (
            <div className="container-fluid px-0">
                <Navbar/>
                <div className="d-block fix-top-space">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact
                                   path='/'
                                   component={HomePage}>
                            </Route>
                            <Route
                                path='/how-to'
                                component={HowToPage}>
                            </Route>
                            <Route
                                path='/shop'
                                component={ShopPage}>
                            </Route>
                            <Route
                                path='/checkout'
                                component={CheckoutPage}>
                            </Route>
                            <Route
                                path='/account'
                                render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<AccountPage/>)}>
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
