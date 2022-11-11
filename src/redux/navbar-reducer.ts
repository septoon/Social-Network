const ADD_FRIENDS = 'ADD-FRIENDS'

type FriendsType = {
    avatar: string
    name: string
}

let initialState = {    
    friendsData: [
        {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Dima'},
        {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Kolya'},
        {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Vasya'},
        {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Sasha'},
        {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Den'},
        {avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', name: 'Max'}
    ] as Array<FriendsType>
}

export type InitialStateType = typeof initialState

const navbarReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case ADD_FRIENDS:
            let newFriend = {
                avatar: '',
                name: ''
            }
            return {...state, friendsData: [...state.friendsData, newFriend] }
        default:
            return state
    }
}

type AddFriendActionCreatorType = {
    type: typeof ADD_FRIENDS
}
export const addFriendActionCreator = (): AddFriendActionCreatorType => ({ type: ADD_FRIENDS })

export default navbarReducer