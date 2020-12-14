import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} />
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remembr me
            </div>
            <div>
                <button>Sign In</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' }) (LoginForm)

const Login = (props) => {
    const submitFormData = formData => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submitFormData} />
        </div>
    )
}

export default Login