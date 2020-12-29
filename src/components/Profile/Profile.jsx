import classes from './Profile.module.css';
import React from 'react';
import Avatar from './Avatar/Avatar';
import Friends from '../Friends/Friends';
import MyPostsContainer from './MyPosts/MyPostsСontainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
    return (
        <div className={classes.profile_wrapper}>
            <div className={classes.top} >
                <Avatar profile={props.profile} savePhoto={props.savePhoto} isOwner={props.isOwner} />
                <ProfileInfo profile={props.profile}
                status={props.status} updateStatusProfile={props.updateStatusProfile} />
            </div>
            <div className={classes.bottom} >
                <Friends />
                <MyPostsContainer profile={props.profile} />            
            </div>
        </div>
    )
}

export default Profile
