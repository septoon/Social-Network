import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = props => {
    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.dialogsPage.messagesData.map(arg => <Message message={arg.message} />)

    // let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    // let messagesElements = props.messages.map(arg => <Message message={arg.message} />)
    
    let newMessageElement = React.createRef()
    let newMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={newMessage}>New Message</button>
            </div>
        </div>
    )
}

export default Dialogs
