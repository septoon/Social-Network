import React from 'react'
// import { NavLink } from 'react-router-dom'
import classes from'../Navbar.module.css'

const FriendsItem = props => {
    return(
        <div className={classes.frItem}>
            <img className={classes.avatar} src={props.avatar} alt='avatar' />
            <div className={classes.name}>{props.name}</div>
        </div>
    )
}

export default FriendsItem
