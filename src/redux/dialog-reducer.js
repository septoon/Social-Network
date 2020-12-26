const SEND_MESSAGE = 'SEND-MESSAGE'
const CHANGE_DIALOG = 'CHANGE_DIALOG'

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
    ]

}

const dialogReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:{
            let body = action.newMessageBody
            return {...state, messagesData: [...state.messagesData, {id: 4, message: body}]}
        }
        default:
            return state
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })
export const changeDialog = () => ({ type: CHANGE_DIALOG })

export default dialogReducer