import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.avatar}>
            <img src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' alt='avatar' />
            </div>
            <div className={classes.name}>
                <strong>{props.name}</strong>
            </div>
            <div className={classes.content}>
                {props.message}
            </div>
            <div className={classes.likes}>
                <span><ion-icon name="heart-circle-outline"></ion-icon> {props.likes}</span>
            </div>
        </div>
    )
}

export default Post