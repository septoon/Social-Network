import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = props => {
    let postsElements = props.postsData
    .map(arg => <Post message={arg.post} likes={arg.likesCount} name={arg.name} />)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.postsBlock}>
            New post
            <div className={classes.posts}>
                <textarea onChange={onPostChange} 
                          ref={newPostElement} 
                          value={props.newPostText} />
                <button onClick={ onAddPost } >Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts
