const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let store = {
    _state: {
        profilePage: {        
            postsData: [
                {id: 1, post: 'Hi, how are you?', likesCount: 12, name: 'Tigran Darchinyan'},
                {id: 2, post: "It's my first post", likesCount: 15, name: 'Tigran Darchinyan'},
                {id: 3, post: 'It is vary cool', likesCount: 26, name: 'Tigran Darchinyan'}
            ],
            newPostText: 'Новый пост'
        },
        dialogsPage: {
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
        },
        navbarPage: {
            friendsData: [
                {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Dima'},
                {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Kolya'},
                {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Vasya'},
                {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Sasha'},
                {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Den'},
                {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Max'}
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer // observer - pattern
    },
    _addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0,
            name: 'Tigran Darchinyan'
        }
    
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    _addMessage(postMessage) {
        let newMessage = {
            id: 4,
            message: postMessage
        }
    
        this._state.dialogsPage.messagesData.push(newMessage)
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        if (action.type === ADD_POST){
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText)
        } else if (action.type === ADD_MESSAGE){
            this._addMessage(action.postMessage)
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const onPostChangeActionCreator = (text) => 
    ({type:UPDATE_NEW_POST_TEXT, newText: text})

export const newMessageActionCreator = (text) => 
    ({type: ADD_MESSAGE, postMessage: text})

export default store
window.store = store
