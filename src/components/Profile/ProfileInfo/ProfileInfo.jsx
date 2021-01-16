import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css'
import ProfileStatusWH from './ProfileStatusWH'

const ProfileInfo = ({ profile, isOwner, updateStatusProfile, status }) => {

    const [editMode, setEditMode] = useState(false)
    
    if(!profile) return <Preloader />

    return(
        <div className={classes.wrapper} >
            <div className={classes.descriptionBlock}>
                <div>
                    <h1>{profile.fullName}</h1>
                    <div className={classes.status} ><b>Стаус: </b> <ProfileStatusWH updateStatusProfile={updateStatusProfile} status={status}/></div>
                    <div>
                        <p>
                        Ищу работу: {profile.lookingForAJob ? 'Да' : 'Нет'}
                        </p>
                        <p>
                        Обо мне: {profile.aboutMe}
                        </p>
                        {profile.lookingForAJob &&
                        <p>
                            Мои навыки: {profile.lookingForAJobDescription}
                        </p>}
                        <div>
                            <b>Контакты: </b> 
                            {
                                editMode 
                                ? <ProfileDataForm profile={profile} isOwner={isOwner} goToEditMode={ () => { setEditMode(false) } } /> 
                                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={ () => { setEditMode(true) } } /> 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}

const ProfileData = ({ profile, isOwner, goToEditMode}) => {
    const contacts = Object.keys(profile.contacts)
    return (
        <div className={classes.contacts} >
            {isOwner && <button onClick={goToEditMode} >Изменить</button>}
            {contacts.map(key => <div > <span>{key}:</span> {profile.contacts[key]} </div> )}
        </div>
    )
}

const ProfileDataForm = ({ profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode} >Сохранить</button>}
            form    
        </div>
    )
}

export default ProfileInfo
