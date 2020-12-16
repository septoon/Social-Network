import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = props => {
    if(!props.profile) {
        return (
            <Preloader />
        )
    }
    return(
        <div className={classes.wrapper} >
            <div className={classes.descriptionBlock}>
            {/* <div className={classes.avatarBlock}>
                <img className={classes.avatar} src={props.profile.photos.small} alt='avatar' />
                <button>Написать сообщение</button>
            </div> */}
                <div>
                    <h1>{props.profile.fullName}</h1>
                    <ProfileStatus updateStatusProfile={props.updateStatusProfile} status={props.status}/>
                    <p>{props.profile.aboutMe}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
