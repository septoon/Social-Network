// import React, { useState } from 'react'
// import classes from './Paginator.module.css'

// const Paginator = (props, portionSize = 10) => {
//     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
//     let pages = []
//     for(let i=1; i <= pagesCount; i++) pages.push(i)

//     return(
//         <div className={classes.pageNumbers} >
//             { portionNumber > 1 ? <button onClick={ () => {setPortionNumber(portionNumber - 1)} } >Prev</button> : <button disabled >Prev</button> }
//             {pages
//             .filter( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
//             .map((p) => {
//                 if(pages.length > 30) pages.length = 30
//                 return <span onClick={(e) => {props.onPageChanged(p)}}
//                 className={props.currentPage === p && classes.selectedPage} 
//                 >{p}</span>
//             })}
//             { portionCount > portionNumber ? <button onClick={ () => {setPortionNumber(portionNumber + 1)} } >Next</button> : <button disabled >Next</button> }
//         </div>
//     )
// }

// export default Paginator

import React, { useState } from 'react'
import classes from './Paginator.module.css'
import cn from 'classnames'

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i=1; i <= pagesCount; i++) pages.push(i)
    let portionSize = 10
    let portionCount = Math.ceil(pagesCount / portionSize)
    let {portionNumber, setPortionNumber} = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
 debugger
    return(
        <div className={classes.pageNumbers} >
            { portionNumber > 1 ? <button onClick={ () => {setPortionNumber(portionNumber - 1)} } >Prev</button> : <button disabled >Prev</button> }
            {pages
            .filter( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                if(pages.length > 30) pages.length = 30
                return <span className={ cn({
                    [classes.selectedPage]: props.currentPage === p
                }, classes.pageNumber) }
                key={p} 
                onClick={ (e) => {
                    props.onPageChanged(p)
                }} >{p}</span>
            })}
            { portionCount > portionNumber ? <button onClick={ () => {setPortionNumber(portionNumber + 1)} } >Next</button> : <button disabled >Next</button> }
        </div>
    )
}
 
export default Paginator
