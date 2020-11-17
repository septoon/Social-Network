import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
        {id: 1, post: 'Hi, how are you?', likesCount: 12, name: 'Tigran Darchinyan'},
        {id: 2, post: "It's my first post", likesCount: 15, name: 'Tigran Darchinyan'},
        {id: 3, post: 'It is vary cool', likesCount: 26, name: 'Tigran Darchinyan'}
    ]

    let postsElements = postsData
    .map(arg => <Post message={arg.post} likes={arg.likesCount} name={arg.name} />)

    return (
        <div className={classes.postsBlock}>
            New post
            <div className={classes.posts}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts
