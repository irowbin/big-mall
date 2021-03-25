import React from 'react'
import {CustomInput} from '../custom-elements/input.component'
import {signInWithGoogle} from '../../firebase/firebase.service'
import {auth} from '../../firebase/firebase.service'
import './sign-in-up.component.scss'
export class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChanges = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    saveChanges = async () => {
        const {username, password} = this.state
        try {
            await auth.signInWithEmailAndPassword(username, password)
            this.setState({username: '', password:''})
        } catch (e) {
            console.error(e)
        }
    }

    render() {
        return (
            <div className="row mt-5 mx-auto w-75">
               <div className="col login-form">
                   <div className="co">
                       <div className="col h5 mb-4 text-muted font-weight-bold">Sign in to your account</div>
                       <div className="col-12 mb-2">
                           <CustomInput
                               placeholder={'Username'}
                               type={'text'}
                               name={'username'}
                               value={this.state.username}
                               handleChanges={this.handleChanges}/>
                       </div>
                       <div className="col-12 mb-2">
                           <CustomInput
                               placeholder={'Password'}
                               type={'text'}
                               name={'password'}
                               value={this.state.password}
                               handleChanges={this.handleChanges}/>
                       </div>
                       <div className="col-12 d-flex justify-content-end">
                           <button onClick={this.saveChanges}
                                   className="btn btn-info">
                               Login
                           </button>
                           <button onClick={signInWithGoogle}
                                   className="btn btn-outline-danger ml-3">
                               Signin with google
                           </button>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}

