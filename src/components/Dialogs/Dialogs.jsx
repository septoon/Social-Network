import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { reset, Field, reduxForm } from 'redux-form';
import Input from '../common/FormsControls/FormControls';
import { required, maxLengthCreator } from '../common/Validator/Validator';

const maxLength50 = maxLengthCreator(50)

const DialogsForm = props => {
    return(
        <form onSubmit={props.handleSubmit} >
            <Field autoFocus placeholder='New message...' validate={[required, maxLength50]} name='newMessageBody' component={Input} />

            <button>New Message</button>
        </form>
    )
}

const DialogsFormRedux = reduxForm({ form: 'dialogs' }) (DialogsForm)

const Dialogs = props => {
    let messagesElements = props.dialogsPage.messagesData.map(arg => <Message key={arg.id} message={arg.message} />)
    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} /> )

    let addMessage = (value) => {
        props.sendMessage(reset(value.newMessageBody))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={classes.messages} >
                {messagesElements}
                <DialogsFormRedux onSubmit={addMessage} />
            </div>
        </div>
    )
}

export default Dialogs
