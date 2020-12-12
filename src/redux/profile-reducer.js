import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE'

let initialState = {            
    profile: null,
    status: 'template',
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
        case SET_STATUS_PROFILE:{ 
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setStatusProfile = (status) => ({ type: SET_STATUS_PROFILE, status })
export const onPostChangeActionCreator = (text) => 
            ({type:UPDATE_NEW_POST_TEXT, newText: text})
            
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
            
export const getStatusProfile = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatusProfile(response.data))
    })
}
            
export const updateStatusProfile = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatusProfile(status))
        } 
    })
}
export default profileReducer
