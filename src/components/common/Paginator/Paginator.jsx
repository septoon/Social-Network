import React from 'react'
import classes from './Paginator.module.css'

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i=1; i <= pagesCount; i++) pages.push(i)

    return(
        <div className={classes.pageNumbers} >
            {pages.map((p) => {
                if(pages.length > 30) pages.length = 30
                return <span onClick={(e) => {props.onPageChanged(p)}} className={props.currentPage === p && classes.selectedPage} >{p}</span>
            })}
        </div>
    )
}

export default Paginator