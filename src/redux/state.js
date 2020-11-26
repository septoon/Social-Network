import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
import navbarReducer from './navbar-reducer'

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
            ],
            newMessageBody: ''
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
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action)

        this._callSubscriber(this._state)
    }
}

export default store
