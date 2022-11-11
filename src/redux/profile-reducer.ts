/* eslint-disable eqeqeq */
import { profileAPI } from "../api/api"

const ADD_POST = 'profile/ADD_POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS_PROFILE = 'profile/SET_STATUS_PROFILE'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS'

type PostsType = {
    id: number
    post: string
    likesCount: number
    name: string
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string | null
    large: string | null
}
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: boolean
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

let initialState = {            
    profile: null as ProfileType | null,
    status: 'template',
    postsData: [
        {id: 1, post: 'Hi, how are you?', likesCount: 12, name: 'Tigran Darchinyan'}
    ] as Array<PostsType>,
    newPostText: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType }
        }
        default:
            return state
    }
}
type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({ type: ADD_POST, newPostText })

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId })

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile })

type SetStatusProfileActionType = {
    type: typeof SET_STATUS_PROFILE
    status: string
}
const setStatusProfile = (status: string): SetStatusProfileActionType => ({ type: SET_STATUS_PROFILE, status })

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos })
            
export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
            
export const getStatusProfile = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatusProfile(response.data))
}
            
export const updateStatusProfile = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0) {
        dispatch(setStatusProfile(status))
    } 
}
            
export const savePhoto = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(file)
    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    } 
}



export default profileReducer
