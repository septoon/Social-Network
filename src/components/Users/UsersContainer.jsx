import React from 'react'
import {followAC, unfollowAC, setUsersAC,
     setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC} from '../../redux/users-reducer'
import {connect} from 'react-redux'
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import classes from './Users.module.css'

class UsersClassContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
        
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }
    
    render() {

       return (
           <div className={classes.users_wrapper} >
                {this.props.isFetching ? <Preloader /> : 
                <Users totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            onPageChanged={this.onPageChanged}
                            currentPage={this.props.currentPage}
                            unfollow={this.props.unfollow}
                            follow={this.props.follow}
                            users={this.props.users}
                            isFetching={this.props.isFetching} /> }
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = dispatch => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersClassContainer)

export default UsersContainer
