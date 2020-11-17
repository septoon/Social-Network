import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const DialogItem = props => {
    let path = `/dialogs/${props.id}`

    return(
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = props => {
    return(
        <div className={classes.message}>{props.message}</div>
    )
}


const Dialogs = props => {
    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kolya'},
        {id: 3, name: 'Vasya'},
        {id: 4, name: 'Ernest'},
        {id: 5, name: 'Mitya'},
        {id: 6, name: 'Victior'}
    ]
    
    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your day?'},
        {id: 3, message: 'It is vary cool'}
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = messagesData.map(arg => <Message message={arg.message} />)
    
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
              {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs
