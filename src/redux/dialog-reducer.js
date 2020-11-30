const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kolya'},
        {id: 3, name: 'Vasya'},
        {id: 4, name: 'Ernest'},
        {id: 5, name: 'Mitya'},
        {id: 6, name: 'Victior'}
    ],
    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your day?'},
        {id: 3, message: 'It is vary cool'}
    ],
    newMessageBody: ''

}

const dialogReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            return {...state, newMessageBody: action.body}
        }
        case SEND_MESSAGE:{
            let body = state.newMessageBody
            return {...state, messagesData: [...state.messagesData, {id: 4, message: body}], newMessageBody: ''}
        }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => 
            ({type:UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogReducer