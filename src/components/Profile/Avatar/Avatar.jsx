import React from 'react'
import classes from './Avatar.module.css'
import user from '../../../assets/images/user.jpg'

const Avatar = (props) => {
    return(
        <div className={classes.avatarBlock}>
            <img className={classes.avatar} src={user} alt='avatar' />
            <button>Написать сообщение</button>
        </div>
    )
}

export default Avatar