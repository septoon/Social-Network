import { act } from "react-dom/cjs/react-dom-test-utils.production.min"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {            
    usersData: [
        // {id: 1, avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', followed: false, fullName: 'Tigran', status: 'I am here', location: {city: 'Kiev', country: 'Ukraine'}},
        // {id: 2, avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', followed: false, fullName: 'Ivan', status: 'I am here', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', followed: true, fullName: 'Dmitry', status: 'I am here', location: {city: 'Dnepr', country: 'Ukraine'}},
        // {id: 4, avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', followed: true, fullName: 'Max', status: 'I am here', location: {city: 'Minsk', country: 'Belarus'}}
    ],
    pageSize: 99,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false

}   

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {...state, usersData: state.usersData.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u
            })}
        case UNFOLLOW:
            return {...state, usersData: state.usersData.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u
            })}
        case SET_USERS:{
            return {...state, usersData: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer