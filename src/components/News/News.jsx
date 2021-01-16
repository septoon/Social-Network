import React from 'react'
import classes from './News.module.css'
import New from './New'
import * as axios from 'axios'

const News = (props) => {

    axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=b910539e60434e3b80d6c9c10816d372').then(response => {
        props.setNews(response.data.articles)
        console.log(response.data)
    })

    return(
        <div className={classes.news_wrapper} >
            <New news={props.news}  />
        </div>
    )
}

export default News
