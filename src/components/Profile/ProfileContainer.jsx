import React from 'react';
import Profile from './Profile';
import {getUserProfile, getStatusProfile, updateStatusProfile} from '../../redux/profile-reducer'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 13101
        this.props.getUserProfile(userId)
        this.props.getStatusProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusProfile={this.props.updateStatusProfile} />
        )
    }
}
let mapStateToProps = state =>  ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect (mapStateToProps, {getUserProfile, getStatusProfile, updateStatusProfile }),
    withRouter,
    withAuthRedirect
) (ProfileContainer)
