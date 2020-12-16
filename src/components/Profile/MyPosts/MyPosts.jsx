import React from 'react';
import classes from './MyPosts.module.css'
import { Field, reduxForm } from 'redux-form'
import Post from './Post/Post';
import { maxLengthCreator, required } from '../../common/Validator/Validator';
import Input from '../../common/FormsControls/FormControls';

const maxLength15 = maxLengthCreator(15)

const PostForm = props => {
    return (
        <form onSubmit={props.handleSubmit} > 
            <div className={classes.posts}>
                <Field autoFocus placeholder={'New post...'}
                        validate={[required, maxLength15]}
                        name={'newPostText'}
                        component={Input} />
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: 'post' }) (PostForm)

const MyPosts = props => {
    let postsElements = props.postsData
    .map(arg => <Post key={arg.id} message={arg.post} likes={arg.likesCount} name={arg.name} />)

    const onAddPost = value => props.addPost(value.newPostText)

    return (
        <div className={classes.postsBlock}>
            New post
            <PostReduxForm onSubmit={onAddPost} />
            {postsElements}
        </div>
    )
}

export default MyPosts
