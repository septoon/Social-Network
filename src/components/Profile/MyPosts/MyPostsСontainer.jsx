import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import {connect} from 'react-redux'

// const MyPostsContainer = () => {
//     return (<StoreContext.Consumer> 
//         {(store) => {
//                 let state = store.getState()
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
            
//                 let onPostChange = (text) => {
//                     let action = onPostChangeActionCreator(text)
//                     store.dispatch(onPostChangeActionCreator(text))
//                 }
//                 return (
//                     <MyPosts updateNewPostText={ onPostChange } addPost={ addPost }
//                                 postsData={state.profilePage.postsData}
//                                 newPostText={state.profilePage.newPostText}/>
//                 )
//             }
                
//         }
//             </StoreContext.Consumer>
//     )
// }

let mapStateToProps = state => {  
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = dispatch => {
    return {
        updateNewPostText: text => dispatch(onPostChangeActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator())
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer
