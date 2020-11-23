let rerenderEntireTree = () => {
    console.log('sate changed')
}

let state = {
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
}

window.state = state

export const addPost = () => {    
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: 0,
        name: 'Tigran Darchinyan'
    }

    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const addMessage = (postMessage) => {
    let newMessage = {
        id: 4,
        message: postMessage
    }

    state.dialogsPage.messagesData.push(newMessage)
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export let subscribe = (observer) => {
    rerenderEntireTree = observer // observer - pattern
}

export default state
