const SEND_MESSAGE = 'SEND-MESSAGE'
const CHANGE_DIALOG = 'CHANGE_DIALOG'

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kolya'},
        {id: 3, name: 'Vasya'},
        {id: 4, name: 'Ernest'},
        {id: 5, name: 'Mitya'},
        {id: 6, name: 'Victior'}
    ] as Array<DialogType>,
    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your day?'},
        {id: 3, message: 'It is vary cool'}
    ] as Array<MessageType>

}

export type InitialStateType = typeof initialState

const dialogReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case SEND_MESSAGE:{
            let body = action.newMessageBody
            return {...state, messagesData: [...state.messagesData, {id: 4, message: body}]}
        }
        default:
            return state
    }
}

type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody })
export const changeDialog = () => ({ type: CHANGE_DIALOG })

export default dialogReducer