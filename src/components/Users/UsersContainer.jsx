import React from 'react'
import {follow, unfollow, getUsers} from '../../redux/users-reducer'
import {connect} from 'react-redux'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import classes from './Users.module.css'
import { compose } from 'redux'
import { getUsersData, getPageSize, getTotalUsersCount,
         getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors'

class UsersClassContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                            followingInProgress={this.props.followingInProgress} /> }
            </div>
        )
    }
}

// let mapStateToProps = state => {
//     return {
//         users: state.usersPage.usersData,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

let mapStateToProps = state => {
    return {
        users: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

const UsersContainer = compose(connect(mapStateToProps, { follow, unfollow, getUsers})) (UsersClassContainer)

export default UsersContainer
