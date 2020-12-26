import React, { useState, useEffect } from 'react';

const ProfileStatusWH = (props) => {
    let [editMode,setEditMode] = useState(false)
    let [status,setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusProfile(status)
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }

    return(
        <div>
            {
                !editMode ? <div><span onDoubleClick={ activateEditMode } >{props.status}</span></div>
                : <div> <input onChange={ onStatusChange } autoFocus={true} onBlur={ deactivateEditMode } value={status} /> </div>
            }
            {/* {
            !editMode && <div><span onDoubleClick={ activateEditMode } >{props.status}</span></div>

            }                
            {
            editMode && <div> <input autoFocus={true} inBlur={ deactivateEditMode } /> </div>
            } */}

        </div>
    )
}

export default ProfileStatusWH
