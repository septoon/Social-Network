import React from 'react'
// import { NavLink } from 'react-router-dom'
import classes from'../Navbar.module.css'
import FriendsItem from './FriendsItem/FriendsItem'

const FriendsNav = props => {
  let friendsElements = props.friendsData.map(arr => <FriendsItem avatar={arr.avatar} name={arr.name} />)

    return(
          <div className={classes.friendsWindow}>
            {friendsElements}
          </div>
    )
}

export default FriendsNav
