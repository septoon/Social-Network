import { newsAPI } from '../api/api'

const SET_NEWS = 'news/SET_NEWS'

type SourceType = {
    id: number
    name: string
}
type ArticlesType = {
    source: SourceType
    author: string | null
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string

}
type NewsDataType = {
    status: string
    totalResults: number
    articles: Array<ArticlesType>
}

let initialState = {
    pageSize: 10,
    newsData: [] as Array<NewsDataType>
}

export type InitialStateType = typeof initialState

const newsReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case SET_NEWS:
            return  {...state, newsData: action.payload}
        default:
            return state
    }
}

type SetNewsActionType = {
    type: typeof SET_NEWS
    payload: NewsDataType
}
export  const setNews = (payload: NewsDataType): SetNewsActionType => ({type: SET_NEWS, payload })

export const getNews = () => {
    return (dispatch: any) => {
        newsAPI.getNews().then((data: { articles: NewsDataType }) => {
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