import React from 'react';
// import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsСontainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />            
        </div>
    )
}

export default Profile
