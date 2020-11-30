import { combineReducers, createStore } from 'redux'
import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
import navbarReducer from './navbar-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

window.store = store

export default store