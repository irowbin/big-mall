import {Component} from 'react'
import {SignIn} from '../../components/account/sign-in.component'
import {SignUp} from '../../components/account/sign-up.component'
export default class AccountPage extends Component{

    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <SignIn />
                    </div>
                    <div className='col-md-6'>
                        <SignUp />
                    </div>
                </div>
            </div>
        )
    }
}
