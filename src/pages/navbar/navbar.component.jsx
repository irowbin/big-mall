import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.component.scss'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { signOutStart } from '../../store'
import { CartContext, useUserContext } from '../../provider'

const Navbar = () => {
  const [isProfileDropdown, setIsProfileDropdown] = useState()
  const { toggleCartDropdown, isDropdownOpen } = useContext(CartContext)
  const { state, dispatch } = useUserContext()
  const { currentUser } = state
  return (
    <nav className='navbar fixed-top  navbar-expand-lg navbar-dark bg-dark'>
      <NavLink className='navbar-brand'
               to='/'>
        BIG MALL
      </NavLink>

      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink exact
                     className='nav-link'
                     to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-item '>
            <NavLink className='nav-link'
                     to='/shop'>
              Shop
            </NavLink>
          </li>
          <li className='nav-item '>
            <NavLink className='nav-link'
                     to='/how-to'>
              User Guide
            </NavLink>
          </li>
        </ul>
        <div className='form-inline my-2 my-lg-0'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              {!currentUser ?
                (<NavLink exact
                          className='nav-link'
                          to='/account'>
                    Signin
                  </NavLink>
                ) : null
              }
            </li>
            <li className={`nav-item dropdown ${isProfileDropdown ? 'show' : ''}`}>
              <span
                id="user-display-name-or-email"
                className='nav-link dropdown-toggle'
                onClick={() => [setIsProfileDropdown(!isProfileDropdown), isDropdownOpen ? toggleCartDropdown() :null]}
              >
                {currentUser?.displayName || currentUser?.email || (currentUser ? 'Profile' :'')}
              </span>
              <div className={`dropdown-menu dropdown-menu-right  ${
                isProfileDropdown ? 'show' : ''
              }`}
              >
                <div
                  className="dropdown-item pointer"
                  onClick={() => [dispatch(signOutStart()), setIsProfileDropdown(false)]}
                >
                  SignOut
                </div>
              </div>
            </li>
            <li className={`nav-item dropdown ${isDropdownOpen ? 'show' : ''}`}>
              <span
                className='nav-link py-0 dropdown-toggle'
                onClick={()=>[toggleCartDropdown(), setIsProfileDropdown(false)]}
              >
                <CartIcon />
              </span>
              <div className={`dropdown-menu cart-dropdown-menu  px-2 py-2 dropdown-menu-right  ${
                isDropdownOpen ? 'show' : ''
              }`}
              >
                <div className='w-100'>
                  <CartDropdown />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
// pull outs the state from top level state
// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser
//   isDropdownOpen: selectCartDropdownOpen
// })
// const mapDispatchToProps = (dispatch) => ({
//   toggleDropdown: () => dispatch(toggleDropdown()),
//   signOut: () => dispatch(signOutStart())
// })
export default Navbar
