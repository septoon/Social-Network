import React from 'react'
import classes from'./Friends.module.css'
import FriendsItem from './FriendsItem/FriendsItem'

const FriendsNav = props => {
  let friendsElements = props.navbarPage.friendsData.map(arr => <FriendsItem key={arr.id} avatar={arr.avatar} name={arr.name} />)

    return(
          <div className={classes.wrapper}>
              {friendsElements}
          </div>
    )
}

export default FriendsNav
