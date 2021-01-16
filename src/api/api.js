import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e175d962-5434-461c-bd2c-f3f73518e89d'
    }
})

const newsInstance = axios.create({
    withCredentials: true,
    baseUrl: `http://newsapi.org/`,
    headers: {
        'API-KEY': 'b910539e60434e3b80d6c9c10816d372'
    }
})

export const newsAPI = {
    getNews: () => {
        return newsInstance.get(`v2/everything?q=bitcoin&apiKey=b910539e60434e3b80d6c9c10816d372`)
        .then(response => {
            return response.data
        })
    }
}

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
    updateStatus: (status) => instance.put(`profile/status`, {status: status}),
    savePhoto: (photo) => {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' } // не обязательный аргумент
        })
    }
}

export const authAPI = {
    me: () => instance.get(`auth/me`),
    login: (email, password, rememberMe = false) => instance.post(`auth/login`, {email, password, rememberMe}),
    logout: () => instance.delete(`auth/login`)
}
