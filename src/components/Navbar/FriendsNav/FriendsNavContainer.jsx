import React from 'react'
import StoreContext from '../../../StoreContext'
import addFriendActionCreator from '../../../redux/navbar-reducer'
import FriendsNav from './FriendsNav'
import {connect} from 'react-redux'

// const FriendsNavContainer = () => {
//     return(
//       <StoreContext.Consumer>
//           { store => {
//             let state = store.getState().navbarPage
//             let onNewFriendsAdd = () => {
//               store.dispatch(addFriendActionCreator())
//             }
//             return <FriendsNav navbarPage={state} newFriend={onNewFriendsAdd} />
//           } }
//       </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
  return {
    navbarPage: state.navbarPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    newFriend: () => dispatch(addFriendActionCreator())
  }
}

const FriendsNavContainer = connect(mapStateToProps, mapDispatchToProps) (FriendsNav);

export default FriendsNavContainer
