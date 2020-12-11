import React from 'react';
import Profile from './Profile';
import {getUserProfile} from '../../redux/profile-reducer'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 13101
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = state =>  ({ profile: state.profilePage.profile })

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent)
