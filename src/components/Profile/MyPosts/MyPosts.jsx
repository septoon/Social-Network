import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = props => {
    let postsElements = props.posts
    .map(arg => <Post message={arg.post} likes={arg.likesCount} name={arg.name} />)

    let newPostElement = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={classes.postsBlock}>
            New post
            <div className={classes.posts}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={ addPost } >Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts
