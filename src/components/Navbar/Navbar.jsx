import React from 'react'
import { NavLink } from 'react-router-dom'
import FriendsNavContainer from './FriendsNav/FriendsNavContainer'
import classes from'./Navbar.module.css'

const Navbar = props => {
    return(
        <nav className={classes.nav}>
          <div className={classes.item}>
            <NavLink to='/profile' activeClassName={classes.active}>My Profile</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/dialogs' activeClassName={classes.active}>My Messages</NavLink>
          </div>
          <div className={`${classes.item} ${classes.active}`}>
            <NavLink to='/news' activeClassName={classes.active}>My News</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/music' activeClassName={classes.active}>My Music</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/settings' activeClassName={classes.active}>My Settings</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/friends' activeClassName={classes.active}>My Friends</NavLink>
          </div>
          <FriendsNavContainer />
      </nav>
    )
}

export default Navbar
