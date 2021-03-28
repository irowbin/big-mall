import React from 'react'
import { connect } from 'react-redux'
import { CustomInput } from '../custom-elements/input.component'
import { signInWithGoogle } from '../../firebase/firebase.service'
import { auth } from '../../firebase/firebase.service'
import { SignInUpFormContainer } from './sign-in-out.styles.component'
import Toast from '../toast/toast.component'
import {
  emailSignInStart,
  googleSignInStart,
  setCurrentUser,
} from '../../store'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      responseMsg: {
        message: '',
      },
    }
  }

  handleChanges = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  saveChanges = () => {
    const { username, password } = this.state
    const { emailSignInStart } = this.props
    emailSignInStart({ username, password })
    // auth
    //   .signInWithEmailAndPassword(username, password)
    //   .then(() => {
    //     this.setState({
    //       username: '',
    //       password: '',
    //       responseMsg: {
    //         isError: false,
    //         message: 'Login Successful!',
    //       },
    //     })
    //   })
    //   .catch((e) =>
    //     e.error?.message === 'EMAIL_NOT_FOUND'
    //       ? this.setState({
    //           responseMsg: {
    //             isError: true,
    //             message: 'Account Not Found',
    //           },
    //         })
    //       : null
    //   )

    setTimeout(() => this.setState({ responseMsg: { message: '' } }))
  }

  render() {
    const { googleSignInStart } = this.props
    const { isError, message } = this.state.responseMsg
    return (
      <div className="row mt-5 mx-auto w-75">
        {message ? <Toast isError={isError} messgae={message} /> : null}
        <SignInUpFormContainer>
          <div className="row">
            <div className="col h5 mb-4 text-muted font-weight-bold">
              Sign in to your account
            </div>
            <div className="col-12 mb-2">
              <CustomInput
                placeholder={'Username'}
                type={'text'}
                name={'username'}
                value={this.state.username}
                handleChanges={this.handleChanges}
              />
            </div>
            <div className="col-12 mb-2">
              <CustomInput
                placeholder={'Password'}
                type={'password'}
                name={'password'}
                value={this.state.password}
                handleChanges={this.handleChanges}
              />
            </div>
            <div className="col-12 d-flex justify-content-end">
              <button onClick={this.saveChanges} className="btn btn-info">
                Login
              </button>
              <button
                onClick={googleSignInStart}
                className="btn btn-outline-danger ml-3"
              >
                Signin with google
              </button>
            </div>
          </div>
        </SignInUpFormContainer>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (user) => dispatch(emailSignInStart(user)),
})
export default connect(null, mapDispatchToProps)(SignIn)
