import classes from './Profile.module.css';
import React from 'react';
import Avatar from './Avatar/Avatar';
import Friends from '../Friends/Friends';
import MyPostsContainer from './MyPosts/MyPostsСontainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
    return (
        <div className={classes.profile_wrapper}>
            <Avatar profile={props.profile} />
            <ProfileInfo profile={props.profile} status={props.status} updateStatusProfile={props.updateStatusProfile} />
            <Friends />
            <MyPostsContainer profile={props.profile} />            
        </div>
    )
}

export default Profile
