import React from 'react'
import classes from './FormControls.module.css'

const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')} >
            <input {...input} {...props} />
            { hasError && <span>{ meta.error }</span> } 
        </div>
    )
}

export default Input