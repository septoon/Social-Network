import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.payload }      
        default:
            return state
    } 
}

type SetAuthUserDataActionPayloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType
}

const setAuthUserData = (id: number | null, email: string | null, login: string | null , isAuth: boolean): SetAuthUserDataActionType => ({ 
    type: SET_USER_DATA, payload: {id, email, login, isAuth} 
})


export const getAuthUserData = () => async (dispatch: any) => {
    const response = await authAPI.me()
    if(response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
const response = await authAPI.login(email, password, rememberMe)
    if(response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Неправильный email или пароль'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout()
    if(response.data.resultCode === 0) dispatch(setAuthUserData(null, null, null, false))
}

export default authReducer