import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = props => {
    return(
        <div>
            <div>
                <img className={classes.wallpaper} src='https://www.meissl.com/media/images/8f24db1f/schweiz.jpg' />
            </div>
            <div className={classes.descriptionBlock}>
                <div>
                <img className={classes.avatar} src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' />
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo