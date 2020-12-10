import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <NavLink to='/profile' >
                <h1>SocialNetwork</h1>
            </NavLink>
            <div className={classes.loginBlock} >
                {props.isAuth ? <a>{props.login}</a> : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header
  