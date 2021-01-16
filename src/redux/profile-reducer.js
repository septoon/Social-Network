import { profileAPI } from "../api/api"

const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS_PROFILE = 'profile/SET_STATUS_PROFILE'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

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
        case SAVE_PHOTO_SUCCESS:{ 
            return {...state, profile: {...state.profile, photos: action.photos} }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setStatusProfile = (status) => ({ type: SET_STATUS_PROFILE, status })
const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
            
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
            
export const getStatusProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatusProfile(response.data))
}
            
export const updateStatusProfile = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0) {
        dispatch(setStatusProfile(status))
    } 
}
            
export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    } 
}



export default profileReducer
