import React from 'react'
import Preloader from '../../../common/Preloader/Preloader'
import classes from './Post.module.css'

const Post = (props) => {
    if(!props.profile) {
        return (
            <Preloader />
        )
    }
    return (
        <div className={classes.item}>
            <div className={classes.avatar}>
            <img src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' alt='avatar' />
            </div>
            <div className={classes.name}>
                <strong>{props.profile.fullName}</strong>
            </div>
            <div className={classes.content}>
                {props.message}
            </div>
            <div className={classes.likes}>
                <span>Likes: {props.likes}</span>
            </div>
        </div>
    )
}

export default Post