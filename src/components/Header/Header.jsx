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
                { props.isAuth
                  ? <div> <a>{props.login}</a> <button onClick={props.logout}>Log out</button> </div>
                  : <NavLink to='/login'>Sign In</NavLink> }
            </div>
        </header>
    )
}

export default Header
  