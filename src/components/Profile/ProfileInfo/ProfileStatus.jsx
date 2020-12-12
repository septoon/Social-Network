import React from 'react';
import classes from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        // this.state.editMode = true
        // this.forceUpdate() // для перерисовки        
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    
    onStatusChange = (event) => {
        // debugger
        this.props.setStatusProfile(event.target.value)
    }

    render() {
        return(
            <div>
                {
                    !this.state.editMode ? <div><span onDoubleClick={this.activateEditMode} >{this.props.status}</span></div>
                    : <div> <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.props.status}/> </div>
                }

            {/* {
                    !this.editMode && <div> <span>{this.props.status}</span> </div>
                }                
                {
                    this.editMode && <div> <input value={this.props.status}/> </div>
                } */}

            </div>
        )
    }
}

export default ProfileStatus
