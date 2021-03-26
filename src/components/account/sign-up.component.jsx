import React from 'react'
import {CustomInput} from '../custom-elements/input.component'
import {auth, createAuthenticatedUserProfile} from '../../firebase/firebase.service'
import {SignInUpFormContainer} from './sign-in-out.styles.component'
export class SignUp extends React.Component {
    initialState = {
        displayName: '',
        email: '',
        password: '',
        cPassword: '',
        isPasswordEqual: false,
        isPasswordChanged: false
    }

    constructor(props) {
        super(props)
        this.state = {...this.initialState}
    }

    validateEqualPassword = () => {
        const {
            isPasswordChanged
        } = this.state
        const {password, cPassword} = this.state
        const isPasswordEqual = password?.length > 0 && cPassword?.length > 0 && password === cPassword
        if (isPasswordEqual && isPasswordChanged) return ''
        if (!isPasswordEqual && !isPasswordChanged) return ''
        else return <span className='text-danger'>Password does not match</span>
    }

    handleChanges = (e) => {
        const {name, value} = e.target
        if (name === 'cPassword') {
            this.setState({isPasswordChanged: true})
        }
        this.setState({[name]: value})
    }

    saveChanges = async () => {

        const {email, password, displayName} = this.state
        const {user} = await auth.createUserWithEmailAndPassword(email, password)

        try {
            await createAuthenticatedUserProfile(user, {displayName})
            this.setState({...this.initialState})
        } catch (e) {
            console.error(e)
        }
    }

    render() {
        return (
            <div className="row mt-5 mx-auto w-75">
              <SignInUpFormContainer>
                  <div className="row">
                      <div className="col h5 mb-4 text-muted font-weight-bold">Create an account</div>
                      <div className="col-12 mb-2">
                          <CustomInput
                              placeholder={'Display Name'}
                              type={'text'}
                              name={'displayName'}
                              value={this.state.displayName}
                              handleChanges={this.handleChanges}/>
                      </div>
                      <div className="col-12 mb-2">
                          <CustomInput
                              placeholder={'email'}
                              type={'email'}
                              name={'email'}
                              value={this.state.email}
                              handleChanges={this.handleChanges}/>
                      </div>
                      <div className="col-12 mb-2">
                          <CustomInput
                              placeholder={'Password'}
                              type={'password'}
                              name={'password'}
                              value={this.state.password}
                              handleChanges={this.handleChanges}/>
                      </div>
                      <div className="col-12 mb-2">
                          <CustomInput
                              placeholder={'Confirm password'}
                              type={'password'}
                              name={'cPassword'}
                              value={this.state.cPassword}
                              handleChanges={this.handleChanges}
                          />
                          {
                              this.validateEqualPassword()
                          }
                      </div>
                      <div className="col-12 d-flex justify-content-end">
                          <button onClick={this.saveChanges}
                                  disabled={!!this.validateEqualPassword()}
                                  className="btn btn-info">
                              Register
                          </button>
                      </div>
                  </div>
              </SignInUpFormContainer>
            </div>
        )
    }
}

