import React from 'react'
import classes from './Preloader.module.css'
import preLoader from '../../../assets/images/preLoader.svg'

const Preloader = (props) => {
    return(
        <div className={classes.preLoader} >
            <img src={preLoader} alt='loader'/>
        </div>
    )
}

export default Preloader
