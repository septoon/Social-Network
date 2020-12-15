import React from 'react';
import { addPostActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux'

let mapStateToProps = state => {
    return {
        postsData: state.profilePage.postsData,
        profile: state.profilePage.profile,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = dispatch => {
    return {
        addPost: (newPostText) => dispatch(addPostActionCreator(newPostText))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer
