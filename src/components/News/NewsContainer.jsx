import React from 'react'
import {setNews} from '../../redux/news-reducer'
import {connect} from 'react-redux'
import News from './News'
// import Preloader from '../common/Preloader/Preloader'
import classes from './News.module.css'
import { compose } from 'redux'

class NewsClassContainer extends React.Component {
    // componentDidMount() {
    //     this.props.getNews()
    // }
    
    render() {
       return (
           <div className={classes.news_wrapper} >
                {/* {this.props.isFetching ? <Preloader /> :  */}
                <News news={this.props.news} setNews={this.props.setNews} /> }
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        news: state.newsPage.newsData
    }
}

const NewsContainer = compose(connect(mapStateToProps, { setNews})) (NewsClassContainer)

export default NewsContainer
