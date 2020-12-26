import React from 'react';
import classes from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log('this: ', this)
        this.setState({
            editMode: true
        })     
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusProfile(this.state.status)
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    render() {
        return(
            <div>
                {
                    !this.state.editMode ? <div><span onDoubleClick={this.activateEditMode} >{this.props.status}</span></div>
                    : <div> <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status}/> </div>
                }
                {/* {
                    !this.editMode && <div><span onDoubleClick={this.activateEditMode} >{this.props.status}</span></div>
                }                
                {
                    this.editMode && <div> <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status}/> </div>
                } */}

            </div>
        )
    }
}

export default ProfileStatus