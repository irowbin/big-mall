import React from 'react';
import {
    NavLink
} from 'react-router-dom';
import './navbar.component.scss'
import {auth} from '../../firebase/firebase.service'
import {connect} from 'react-redux'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {toggleDropdown} from '../../store/action/cart/cart-action';
import {selectCurrentUser} from '../../store/selector/user/user-selector';
import {selectCartDropdownOpen} from '../../store/selector/cart/cart-selector';
import {createStructuredSelector} from 'reselect'

const Navbar = ({currentUser, isDropdownOpen, toggleDropdown}) => {

    return (
        <nav className='navbar fixed-top  navbar-expand-lg navbar-dark bg-dark'>
            <NavLink className='navbar-brand'
                     to='/'>BIG MALL</NavLink>

            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <NavLink exact
                                 className='nav-link'
                                 to='/'> Home </NavLink>
                    </li>
                    <li className='nav-item '>
                        <NavLink className='nav-link'
                                 to='/shop'> Shop </NavLink>
                    </li>
                    <li className='nav-item '>
                        <NavLink className='nav-link'
                                 to='/how-to'> User Guide </NavLink>
                    </li>
                </ul>
                <div className='form-inline my-2 my-lg-0'>
                    <ul className='navbar-nav mr-auto'>

                        <li className='nav-item'>
                            {
                                currentUser ?
                                    <div className='nav-link btn-link pointer'
                                         onClick={() => auth.signOut()}> SignOut</div>
                                    : <NavLink exact
                                               className='nav-link'
                                               to='/account'> Signin </NavLink>
                            }

                        </li>
                        <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
                            <span className='nav-link py-0 dropdown-toggle'
                                  onClick={toggleDropdown}
                            >
                                <CartIcon/>
                            </span>
                            <div className={`dropdown-menu px-2 py-2 dropdown-menu-right  ${isDropdownOpen ? 'show' : ''}`}>
                                <div className='w-100'><CartDropdown/></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
// pull outs the state from top level state
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isDropdownOpen: selectCartDropdownOpen
})
const mapDispatchToProps = dispatch => ({
    toggleDropdown: () => dispatch(toggleDropdown())
})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
