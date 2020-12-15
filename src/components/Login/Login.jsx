import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from '../common/FormsControls/FormControls'
import { required, maxLengthCreator } from '../common/Validator/Validator'

const maxLength15 = maxLengthCreator(15)

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'Login'} validate={[required, maxLength15]} name={'login'} component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'} validate={[required, maxLength15]} name={'password'} component={Input} />
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