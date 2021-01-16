import React from 'react'
import classes from './News.module.css'

const User = (props) => {
    return(
        <div className={classes.news_item} >
            {props.news.map(u => <div key={u.id} className={classes.new_item}>
                <div className={classes.header}>
                    <h1>{u.source.name}</h1>
                    <h3>{u.author}</h3>
                </div>
                <img src={u.urlToImage} alt='image'/>
                <div className={classes.title} >
                    <span>{u.title}</span>
                    <span>{u.description}</span>
                </div>
                <span>{u.url}</span>
                <span>{u.publishedAt}</span>
                <span>{u.content}</span>
            </div>)}
        </div>
    )
}

export default User
