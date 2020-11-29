import React from 'react'
import StoreContext from '../../../StoreContext'
import addFriendActionCreator from '../../../redux/navbar-reducer'
import FriendsNav from './FriendsNav'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
  return { navbarPage: state.navbarPage }
}

let mapDispatchToProps = (dispatch) => {
  return { newFriend: () => dispatch(addFriendActionCreator()) }
}

const FriendsNavContainer = connect(mapStateToProps, mapDispatchToProps) (FriendsNav);

export default FriendsNavContainer
