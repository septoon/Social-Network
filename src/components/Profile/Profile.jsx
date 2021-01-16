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
                status={props.status} updateStatusProfile={props.updateStatusProfile}
                isOwner={props.isOwner}  />
            </div>
            <div className={classes.bottom} >
                <div className={classes.friends_wrapper} >
                    <Friends />
                </div>
                <MyPostsContainer profile={props.profile} isOwner={props.isOwner} />            
            </div>
        </div>
    )
}

export default Profile
