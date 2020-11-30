const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {            
    usersData: [
        {id: 1, avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', followed: false, fullName: 'Tigran', status: 'I am here', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 2, avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', followed: false, fullName: 'Ivan', status: 'I am here', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', followed: true, fullName: 'Dmitry', status: 'I am here', location: {city: 'Dnepr', country: 'Ukraine'}},
        {id: 4, avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', followed: true, fullName: 'Max', status: 'I am here', location: {city: 'Minsk', country: 'Belarus'}}
    ]

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
        case SET_USERS:
            return {...state, usersData: [...state.usersData, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users })

export default usersReducer