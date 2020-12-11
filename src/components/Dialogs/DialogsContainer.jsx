import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs';
import {connect} from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return { dialogsPage: state.dialogsPage }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: body => dispatch(updateNewMessageBodyCreator(body)),
        sendMessage: () => dispatch(sendMessageCreator())
    }
}
const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs)

export default DialogsContainer
