import React from 'react'
import {follow, unfollow, setUsers,
        setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress} from '../../redux/users-reducer'
import {connect} from 'react-redux'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import classes from './Users.module.css'
import { usersAPI } from '../../api/api'


class UsersClassContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
        
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
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
                            isFetching={this.props.isFetching}
                            toggleFollowingProgress={this.props.toggleFollowingProgress}
                            followingInProgress={this.props.followingInProgress} /> }
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress}) (UsersClassContainer)

export default UsersContainer
