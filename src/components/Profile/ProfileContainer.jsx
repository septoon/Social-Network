import React from 'react';
import Profile from './Profile';
import * as axios from 'axios'
import {setUserProfile} from '../../redux/profile-reducer'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
            this.props.setUserProfile(response.data)
        })
    }

/* ARTHUR
    async componentDidMount () {
        try {
            let userId = this.props.match.params.userId || "";
            const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`);
    
            console.log(response);
    
            this.props.setUserProfile(response.data);
        } catch (e) {
    }
        
*/


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = state =>  ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent)
