import React, { useState, useEffect, useContext } from 'react'
import { CustomInput } from '../custom-elements/input.component'
import { SignInUpFormContainer } from './sign-in-out.styles.component'
import Spinner from '../spinner/spinner.component'
import { UserContext } from '../../provider'
import { emailSignInStart, googleSignInStart } from '../../store'
import { withRouter } from 'react-router-dom'

const SignIn = ({ history }) => {
  const { state, dispatch } = useContext(UserContext)
  const { isSigningStart, isSuccess, error } = state
  const [userCred, setUserCred] = useState({
    username: '',
    password: ''
  })

  useEffect(() => {
    if (!isSuccess || error) return
    setTimeout(() => history.push('/'), 1000)
  }, [isSuccess, history, error])

  useEffect(() => {
    if (!error) return
    const uuid = window.URL.createObjectURL(new Blob([])).split('/').pop()
    // showToast({
    //   uid: uuid,
    //   isError: !!error,
    //   message: error?.message,
    //   onClose:  () => hideToast(uuid)
    // })
    console.log(error?.message)
  }, [error])

  const { username, password } = userCred

  const handleChanges = (e) => {
    const { name, value } = e.target
    setUserCred({ ...userCred, [name]: value })
  }

  const saveChanges = () => {
    dispatch(emailSignInStart({ username, password }))
  }
  return (
    <div className='row mt-5 mx-auto w-75'>
      <SignInUpFormContainer>
        {
          error || isSuccess ?
            <div className={`alert alert-${error ? 'danger' : 'success'}`}>
              {error ? error.message : isSuccess ? 'Login successful..' : ''}
            </div>
            : null
        }
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
              onClick={()=>dispatch(googleSignInStart())}
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
// const mapDispatchToProps = (dispatch) => ({
//   googleSignInStart: () => dispatch(googleSignInStart()),
//   emailSignInStart: (user) => dispatch(emailSignInStart(user)),
//   showToast: (data) => dispatch(showToast(data)),
//   hideToast: (uuid) => dispatch(hideToast(uuid))
// })
// const mapStateToProps = createStructuredSelector({
//   isSigningStart: selectIsSigningStart,
//   isSuccess: selectIsSuccess,
//   error: selectError
// })

export default withRouter(SignIn)
