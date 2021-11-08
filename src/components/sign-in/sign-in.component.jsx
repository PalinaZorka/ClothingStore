import React from "react";
import FormInput from "../form-input/form-imput.component";
import './sign-in.styles.scss';
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomBotton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I alreade have an acount</h2>
                <span>Sign in with your email and password</span>

                <from onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
                    <FormInput name="password" tupe="password" value={this.state.password} handleChange={this.handleChange} label="password" required />
                    <CustomBotton type="submit">Sign in</CustomBotton>
                    <CustomBotton onClick={signInWithGoogle}>
                    {' '}
                    Sign in with Google{' '}
                    </CustomBotton>
                </from>
            </div>
        )
    }
}
 
export default SignIn;