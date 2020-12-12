import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsСontainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
    return (
        <div>
            <ProfileInfo profile={props.profile} {...props} />
            <MyPostsContainer profile={props.profile} />            
        </div>
    )
}

export default Profile
