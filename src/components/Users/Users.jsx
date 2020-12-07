import React from 'react'
import classes from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom'
import { followAPI } from '../../api/api'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return(
        <div className={classes.users_wrapper} >
            <div className={classes.pageNumbers} >
                {pages.map((p) => {
                    if(pages.length > 30) pages.length = 30
                    return <span onClick={(e) => {props.onPageChanged(p)}} className={props.currentPage === p && classes.selectedPage} >{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id} className={classes.user_item}>
                <div className={classes.left} >
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={ u.photos.small !== null ? u.photos.small : userPhoto} alt='avatar' className={classes.avatar}/>
                        </NavLink>
                    </div>
                    <div>
                     {u.followed
                        ? <button onClick={() => {
                            followAPI.followDelete(u.id).then(data => {
                                if(data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                            })
                        }} >Unfollow</button>

                        : <button onClick={() => {
                            debugger
                            followAPI.followPost(u.id).then(data => {
                                if(data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                            })                            
                        }} >Follow</button>}
                    </div>
                </div>
                <div className={classes.right} >
                    <div className={classes.name} >
                        <div className={classes.fullName} >{u.name}</div>
                        <div className={classes.status} >{u.status} </div>
                    </div>
                    <div className={classes.location} >
                        <div className={classes.country} >{'u.location.country'}</div>
                        <div className={classes.city} >{'u.location.city'}</div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Users