import { newsAPI } from '../api/api'

const SET_NEWS = 'news/SET_NEWS'

let initialState = {
    pageSize: 10,
    newsData: []
}   

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NEWS:
            return  {...state, newsData: action.news}
        default:
            return state
    }
}

export  const setNews = (news) => ({type: SET_NEWS, news })

export const getNews = (news) => {
    return (dispatch) => {
        newsAPI.getNews().then(data => {
            dispatch(setNews(data.articles))
        })
    } 
}

// export const getNews = (news) => {
//     return async (dispatch) => {
//         const data = await newsAPI.getNews()
//         dispatch(setNews(data.articles))
//     }
// }

export default newsReducer