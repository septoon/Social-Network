import React from 'react';
import classes from '../Dialogs.module.css'

const Message = props => {
    return(
        <div className={classes.message}>
            <div className={classes.avatar}>
                <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" alt="avatar"/>
            </div>
            <div className={classes.name}>
                Sergey
            </div>
            <div className={classes.text}>{props.message}</div>
        </div>
    )
}

export default Message
