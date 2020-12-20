import dialogReducer, { sendMessageCreator } from '../dialog-reducer'

let state = {
    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your day?'},
        {id: 3, message: 'It is vary cool'}
    ]
}

it('new message should be added', () => {
    const action = sendMessageCreator('hi')

    const newState = dialogReducer(state, action)

    expect(newState.messagesData.length).toBe(4)
})

it('new message should be correct', () => {
    const action = sendMessageCreator('hi')

    const newState = dialogReducer(state, action)

    expect(newState.messagesData.[3].message).toBe('hi')
})