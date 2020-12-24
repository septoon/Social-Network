import React from 'react'
import classes from './Avatar.module.css'
import user from '../../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'

const Avatar = (props) => {
    return(
        <div className={classes.avatarBlock}>
            <img className={classes.avatar} src={user} alt='avatar' />
            <NavLink to='/dialogs' > <button>Написать сообщение</button> </NavLink>            
        </div>
    )
}

export default Avatar