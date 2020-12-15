import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Input from '../common/FormsControls/FormControls'
import { required, maxLengthCreator } from '../common/Validator/Validator'
import { login, logout } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'

const maxLength40 = maxLengthCreator(40)

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'Email'} validate={[required, maxLength40]} name={'email'} component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'} type='password' validate={[required, maxLength40]} name={'password'} component={Input} />
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
        let {email, password, rememberMe} = formData
        props.login(email, password, rememberMe)
        console.log(formData)
    }

    if(props.isAuth) return <Redirect to='/profile' />
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={submitFormData} />
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, logout }) (Login)