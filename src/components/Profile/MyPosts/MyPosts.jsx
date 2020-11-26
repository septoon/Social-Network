import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = props => {
    let postsElements = props.postsData
    .map(arg => <Post message={arg.post} likes={arg.likesCount} name={arg.name} />)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text})
    }

    return (
        <div className={classes.postsBlock}>
            New post
            <div className={classes.posts}>
                <textarea onChange={onPostChange} 
                          ref={newPostElement} 
                          value={props.newPostText} />
                <button onClick={ addPost } >Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts
