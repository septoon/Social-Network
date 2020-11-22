import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText} 
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText} />

            {/* <MyPosts posts={props.posts} /> */}
            
        </div>
    )
}

export default Profile
