import React from 'react';
import classes from './MyPosts.module.css'
import { Field, reduxForm } from 'redux-form'
import Post from './Post/Post';
import { maxLengthCreator, required } from '../../common/Validator/Validator';
import Input from '../../common/FormsControls/FormControls';

const maxLength300 = maxLengthCreator(300)

const PostForm = props => {
    return (
        <form onSubmit={props.handleSubmit} > 
            <div className={classes.posts}>
                <Field autoFocus placeholder={'New post...'}
                        validate={[required, maxLength300]}
                        name={'newPostText'}
                        component={Input} />
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: 'post' }) (PostForm)

const MyPosts = React.memo(props => {
    let postsElements = 
    [...props.postsData] // делаем копию массива постов, чтобы перевернуть
    .reverse()
    .map(arg => <Post profile={props.profile} key={arg.id} message={arg.post} likes={arg.likesCount} name={arg.name} />)

    const onAddPost = value => props.addPost(value.newPostText)

    return (
        <div className={classes.postsBlock}>
            Posts
            { props.isOwner && <PostReduxForm onSubmit={onAddPost} /> }            
            {postsElements}
        </div>
    )
})

export default MyPosts
