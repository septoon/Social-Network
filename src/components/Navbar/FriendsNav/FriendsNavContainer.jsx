import React from 'react'
import StoreContext from '../../../StoreContext'
import addFriendActionCreator from '../../../redux/navbar-reducer'
import FriendsNav from './FriendsNav'

const FriendsNavContainer = () => {
    return(
      <StoreContext.Consumer>
          { store => {
            let state = store.getState().navbarPage
            let onNewFriendsAdd = () => {
              store.dispatch(addFriendActionCreator())
            }
            return <FriendsNav navbarPage={state} newFriend={onNewFriendsAdd} />
          } }
      </StoreContext.Consumer>
    )
}

export default FriendsNavContainer
