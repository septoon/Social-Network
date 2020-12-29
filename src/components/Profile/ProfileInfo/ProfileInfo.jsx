import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
import ProfileStatusWH from './ProfileStatusWH'

const ProfileInfo = props => {
    if(!props.profile) {
        return (
            <Preloader />
        )
    }

    return(
        <div className={classes.wrapper} >
            <div className={classes.descriptionBlock}>
                <div>
                    <h1>{props.profile.fullName}</h1>
                    <ProfileStatusWH updateStatusProfile={props.updateStatusProfile} status={props.status}/>
                    <p>{props.profile.aboutMe}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
