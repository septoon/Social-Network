import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialog-reducer'

const Dialogs = props => {
    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = state.messagesData.map(arg => <Message message={arg.message} />)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea value={newMessageBody}
                onChange={onNewMessageChange}
                placeholder='New message' />

                <button onClick={onSendMessageClick}>New Message</button>
            </div>
        </div>
    )
}

export default Dialogs
