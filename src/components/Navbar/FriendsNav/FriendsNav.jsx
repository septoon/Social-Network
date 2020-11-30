import React from 'react'
import classes from'../Navbar.module.css'
import FriendsItem from './FriendsItem/FriendsItem'

const FriendsNav = props => {
  let friendsElements = props.navbarPage.friendsData.map(arr => <FriendsItem key={arr.id} avatar={arr.avatar} name={arr.name} />)

    return(
          <div className={classes.friendsWindow}>
            {friendsElements}
          </div>
    )
}

export default FriendsNav
