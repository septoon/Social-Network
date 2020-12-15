import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e175d962-5434-461c-bd2c-f3f73518e89d'
    }
})

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, { withCredentials: true })
        .then(response => {
            return response.data
        })
    },
    followDelete: (userId) => {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        })
    },

    followPost: (userId) => {
        return instance.post(`follow/${userId}`, null).then(response => {
            return response.data
        })
    },
    getProfile: (userId) => {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile: (userId) => instance.get(`profile/${userId}`),
    getStatus: (userId) => instance.get(`profile/status/${userId}`),
    updateStatus: (status) => instance.put(`profile/status`, {status: status})
}

export const authAPI = {
    me: () => instance.get(`auth/me`),
    login: (email, password, rememberMe = false) => instance.post(`auth/login`, {email, password, rememberMe}),
    logout: () => instance.delete(`auth/login`)
}
