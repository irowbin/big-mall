import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { CustomInput } from '../custom-elements/input.component'
import { SignInUpFormContainer } from './sign-in-out.styles.component'
import {
  emailSignInStart,
  googleSignInStart
} from '../../store'
import { createStructuredSelector } from 'reselect'
import { selectError, selectIsSigningStart, selectIsSuccess } from '../../store/selector/user/user-selector'
import Spinner from '../spinner/spinner.component'
import { hideToast, showToast } from '../../store/action/toast/toast-actions'

const SignIn = (props) => {
  const { googleSignInStart, emailSignInStart, isSigningStart, isSuccess, error, showToast, hideToast } = props
  const [userCred, setUserCred] = useState({
    username: '',
    password: ''
  })

  useEffect(()=>{
    const uuid = window.URL.createObjectURL(new Blob([])).split('/').pop()
    showToast({
      uid: uuid,
      isError: !!error,
      message: error?.message,
      onClose:  () => hideToast(uuid)
    })
  }, [error, showToast])

  const { username, password } = userCred

  const handleChanges = (e) => {
    const { name, value } = e.target
    setUserCred({ ...userCred, [name]: value })
  }

  const saveChanges = () => {
    emailSignInStart({ username, password })
  }
  return (
    <div className='row mt-5 mx-auto w-75'>
      <SignInUpFormContainer>
        <div className='row'>
          <div className='col h5 mb-4 text-muted font-weight-bold'>
            Sign in to your account
          </div>
          <div className='col-12 mb-2'>
            <CustomInput
              placeholder={'Username'}
              type={'text'}
              name={'username'}
              value={username}
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
          <div className='col-12 d-flex justify-content-end'>
            <button
              onClick={saveChanges}
              disabled={isSigningStart && !isSuccess}
              className={`btn d-flex ${isSigningStart ? 'btn-disabled' : ' btn-info'}`}

            >
              {
                isSigningStart ? <span className='mr-2'>
                  <Spinner spinnerHeight={'20px'}
                           spinnerWidth={'20px'}
                           noBackdrop
                           autoContainer />
                </span> : null}
              Login

              {isSigningStart ? 'ing' : ''}
            </button>
            <button
              onClick={googleSignInStart}
              className='btn btn-outline-danger ml-3'
            >
              Signin with google
            </button>

          </div>
        </div>
      </SignInUpFormContainer>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (user) => dispatch(emailSignInStart(user)),
  showToast: (data) => dispatch(showToast(data)),
  hideToast: (uuid) => dispatch(hideToast(uuid))
})
const mapStateToProps = createStructuredSelector({
  isSigningStart: selectIsSigningStart,
  isSuccess: selectIsSuccess,
  error: selectError
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
