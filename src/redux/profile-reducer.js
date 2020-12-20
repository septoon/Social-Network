import { profileAPI } from "../api/api"

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE'

let initialState = {            
    profile: null,
    status: 'template',
    postsData: [
        {id: 1, post: 'Hi, how are you?', likesCount: 12, name: 'Tigran Darchinyan'}
    ]
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:{
            let newPost = { id: 2, post: action.newPostText, likesCount: 3, name: 'Tigran Darchinyan' }
            
            return {...state, postsData: [...state.postsData, newPost]}
        }
        case DELETE_POST:{
            return {...state, postsData: state.postsData.filter(p => p.id != action.postId)}
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

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setStatusProfile = (status) => ({ type: SET_STATUS_PROFILE, status })
            
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
