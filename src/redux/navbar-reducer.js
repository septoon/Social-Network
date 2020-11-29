const ADD_FRIENDS = 'ADD-FRIENDS'

let initialState = {    
    friendsData: [
        {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Dima'},
        {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Kolya'},
        {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Vasya'},
        {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Sasha'},
        {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Den'},
        {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Max'}
    ]

}

const navbarReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FRIENDS:
            let newFriend = {
                avatar: '',
                name: ''
            }    
            state.friendsData.push(newFriend)
            return state
        default:
            return state
    }
}

export const addFriendActionCreator = () => ({ type: ADD_FRIENDS })

export default navbarReducer