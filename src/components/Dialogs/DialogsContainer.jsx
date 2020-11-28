import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';

const DialogsContainer = props => {
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return(
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                 dialogsPage={props.store.getState().dialogsPage} />
    )
}

export default DialogsContainer
