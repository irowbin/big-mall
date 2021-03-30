import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsSignupStart, selectIsSuccess } from '../../store/selector/user/user-selector'
import { CustomInput } from '../custom-elements/input.component'
import { SignInUpFormContainer } from './sign-in-out.styles.component'
import { signUpStart } from '../../store'
import Spinner from '../spinner/spinner.component'

const SignUp = ({ isSignupStart, signUpStart,isSuccess }) => {
  const initialState = {
    displayName: '',
    email: '',
    password: '',
    cPassword: '',
    isPasswordEqual: false,
    isPasswordChanged: false
  }
  const [userForm, setUserForm] = useState({ ...initialState })
  const {
    displayName,
    email,
    password,
    cPassword,
    isPasswordChanged
  } = userForm


  const validateEqualPassword = () => {
    const isPasswordEqual =
      password?.length > 0 && cPassword?.length > 0 && password === cPassword
    if (isPasswordEqual && isPasswordChanged) return ''
    if (!isPasswordEqual && !isPasswordChanged) return ''
    else return <span className='text-danger'>Password does not match</span>
  }

  const handleChanges = (e) => {
    const { name, value } = e.target
    if (name === 'cPassword') {
      setUserForm({ ...userForm, [name]: value, isPasswordChanged: true })
    } else {
      setUserForm({ ...userForm, [name]: value })
    }
  }

  const saveChanges = () => {
    signUpStart({ displayName, email, password })
    try {
      setUserForm({ ...initialState })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='row mt-5 mx-auto w-75'>
      <SignInUpFormContainer>
        <div className='row'>
          <div className='col h5 mb-4 text-muted font-weight-bold'>
            Create an account
          </div>
          <div className='col-12 mb-2'>
            <CustomInput
              placeholder={'Display Name'}
              type={'text'}
              name={'displayName'}
              value={displayName}
              handleChanges={handleChanges}
            />
          </div>
          <div className='col-12 mb-2'>
            <CustomInput
              placeholder={'email'}
              type={'email'}
              name={'email'}
              value={email}
              handleChanges={handleChanges}
            />
          </div>
          <div className='col-12 mb-2'>
            <CustomInput
              placeholder={'Password'}
              type={'password'}
              name={'password'}
              value={password}
              handleChanges={handleChanges}
            />
          </div>
          <div className='col-12 mb-2'>
            <CustomInput
              placeholder={'Confirm password'}
              type={'password'}
              name={'cPassword'}
              value={cPassword}
              handleChanges={handleChanges}
            />
            {validateEqualPassword()}
          </div>
          <div className='col-12 d-flex justify-content-end'>
            <button
              onClick={saveChanges}
              disabled={(isSignupStart && !isSuccess) || !!validateEqualPassword()}
              className={`btn d-flex ${isSignupStart ? 'btn-disabled': ' btn-info'}`}

            >
              {
                isSignupStart ? <span className="mr-2">
                  <Spinner spinnerHeight={'20px'}
                           spinnerWidth={'20px'}
                           noBackdrop
                           autoContainer />
                </span> : null}
              Register

              {isSignupStart ? 'ing' : ''}
            </button>

          </div>
        </div>
      </SignInUpFormContainer>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  isSignupStart: selectIsSignupStart,
  isSuccess: selectIsSuccess
})
const mapDispatchToProps = dispatch => ({
  signUpStart: (userInfo) => dispatch(signUpStart(userInfo))
})
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
