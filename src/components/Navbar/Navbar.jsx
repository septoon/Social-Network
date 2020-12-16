import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from'./Navbar.module.css'

const Navbar = props => {
    return(
        <nav className={classes.nav}>
          <div className={classes.item}>
            <NavLink to='/profile' activeClassName={classes.active}>Моя страница</NavLink>
          </div>
          <div className={`${classes.item} ${classes.active}`}>
            <NavLink to='/news' activeClassName={classes.active}>Новости</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/dialogs' activeClassName={classes.active}>Сообщения</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/friends' activeClassName={classes.active}>Друзья</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/music' activeClassName={classes.active}>Аудиозаписи</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/users' activeClassName={classes.active}>Пользователи</NavLink>
          </div>
          <div className={classes.item}>
            <NavLink to='/settings' activeClassName={classes.active}>Настройки</NavLink>
          </div>
      </nav>
    )
}

export default Navbar
