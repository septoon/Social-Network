import * as axios from 'axios'

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(`${baseUrl}users?page=${currentPage}&count=${pageSize}`, { withCredentials: true })
    // .then(response => {
    //     return response.data
    // })
}

export const followDelete = (userId) => {
    axios.delete(`${baseUrl}follow/${userId}`, {
        withCredentials: true,
        headers: {
            'API-KEY': 'e175d962-5434-461c-bd2c-f3f73518e89d'
        }
    })
}


export const followPost = (userId) => {
    axios.post(`${baseUrl}follow/${userId}`, null, {
        withCredentials: true,
        headers: {
            'API-KEY': 'e175d962-5434-461c-bd2c-f3f73518e89d'
        }
    })
}


// {u.followed
//     ? <button onClick={() => {
//         axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
//             withCredentials: true,
//             headers: {
//                 'API-KEY': '10613a62-3fb7-4ddc-8f5f-9a265ec1945a'
//             }
//     }).then(response => {
//             if(response.data.resultCode === 0) {
//                 props.unfollow(u.id)
//             }
//         })
//     }} >Unfollow</button>

//     : <button onClick={() => {
//         axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
//             withCredentials: true,
//             headers: {
//                 'API-KEY': '10613a62-3fb7-4ddc-8f5f-9a265ec1945a'
//             }
//     }).then(response => {
//             if(response.data.resultCode === 0) {
//                 props.follow(u.id)
//             }
//         })                            
//     }} >Follow</button>}