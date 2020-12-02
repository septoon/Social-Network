import React from 'react'
import classes from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
        
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize)
        let pages = []
        for(let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return(
            <div className={classes.users_wrapper} >
                <div>
                    {pages.map((p) => {
                        if(pages.length > 30) pages.length = 30
                       return <span onClick={(e) => {this.onPageChanged(p)}} className={this.props.currentPage === p && classes.selectedPage} >{p}</span>
                    })}
                </div>
                {this.props.users.map(u => <div key={u.id} className={classes.user_item}>
                    <div className={classes.left} >
                        <div>
                            <img src={ u.photos.small !== null ? u.photos.small : userPhoto} alt='avatar' className={classes.avatar}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {this.props.unfollow(u.id)}} >Unfollow</button>
                                : <button onClick={() => {this.props.follow(u.id)}} >Follow</button>}
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
}

export default Users
