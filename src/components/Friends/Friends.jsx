import React from 'react';
// import StoreContext from '../../StoreContext'
import addFriendActionCreator from '../../redux/navbar-reducer'
import FriendsNav from './FriendsNav'
import {connect} from 'react-redux'
import classes from'./Friends.module.css'

let mapStateToProps = (state) => {
  return { navbarPage: state.navbarPage }
}

let mapDispatchToProps = (dispatch) => {
  return { newFriend: () => dispatch(addFriendActionCreator()) }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps) (FriendsNav);

const Friends = (props) => {
    return(
        <div className={classes.friends_wrapper} >
            <h2>Friends</h2>
            <FriendsContainer />
        </div>
    )
}

export default Friends
