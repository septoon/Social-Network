import { usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {            
    profile: null,
    postsData: [
        {id: 1, post: 'Hi, how are you?', likesCount: 12, name: 'Tigran Darchinyan'}
    ],
    newPostText: ''

}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0,
                name: 'Tigran Darchinyan'
            }
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''}
        }
        case UPDATE_NEW_POST_TEXT:{
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE:{ 
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const onPostChangeActionCreator = (text) => 
            ({type:UPDATE_NEW_POST_TEXT, newText: text})
            
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export default profileReducer
