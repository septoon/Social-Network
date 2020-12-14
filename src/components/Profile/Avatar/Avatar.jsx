import React from 'react'
import classes from './Avatar.module.css'

const Avatar = (props) => {
    // let avatar = props.profile.photos.small
    return(
        <div className={classes.avatarBlock}>
            <img className={classes.avatar} src='' alt='avatar' />
            <button>Написать сообщение</button>
        </div>
    )
}

export default Avatar