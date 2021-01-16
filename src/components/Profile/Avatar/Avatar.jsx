import React from 'react'
import classes from './Avatar.module.css'
import user from '../../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'
import Preloader from '../../common/Preloader/Preloader'

const AddPhoto = (props) => {

    const onAvatarSelected = (e) => {
        if(e.target.files.length) props.savePhoto(e.target.files[0])
    }
    return (
        <div>
            <input type='file' className={classes.input__file} onChange={ onAvatarSelected } /> 
            <label for="input__file" className={classes.input__file_button}>
                <span className={classes.input__file_button_text}>Сменить фото</span>
            </label>
        </div>
    )
}

const Avatar = (props) => {
    if(!props.profile) {
        return (
            <Preloader />
        )
    }

    // debugger
    return(
        <div className={classes.avatarBlock}>
            <img className={classes.avatar} src={props.profile.photos.large || user} alt='avatar' />
            <div className={classes.input__wrapper}>
                { props.isOwner && <AddPhoto /> }
            </div>
            <NavLink to='/dialogs' > <button className={classes.input__file_button} >Написать сообщение</button> </NavLink>            
        </div>
    )
}

export default Avatar