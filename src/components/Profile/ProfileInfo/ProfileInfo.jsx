import React from 'react';
import { Redirect } from 'react-router-dom';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'

const ProfileInfo = props => {
    if(!props.profile) {
        return (
            <Preloader />
        )
    } else if (!props.isAuth) return <Redirect to={'/login'} />

    return(
        <div>
            <div>
                <img className={classes.wallpaper} src='https://www.meissl.com/media/images/8f24db1f/schweiz.jpg' />
            </div>
            <div className={classes.descriptionBlock}>
                <div>
                    <img className={classes.avatar} src={props.profile.photos.small} />
                {/* <img className={classes.avatar} src={photos.small} /> */}
                </div>
                <div>
                    <h1>{props.profile.fullName}</h1>
                    <p>{props.profile.aboutMe}</p>
                    {/* <h1>{fullName}</h1>
                    <p>{aboutMe}</p> */}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
