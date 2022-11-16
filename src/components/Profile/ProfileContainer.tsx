import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/Redux-Store";
import {getUserProfileTC, ProfileType} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: number
}
//@ts-ignore
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapProfileContainerPropsType

type MapStateToPropsType = {
    profile: ProfileType,
    isAuth: boolean

}
type MapDispatchToProps = {
    getUserProfileTC: (userId: number) => void
}
type MapProfileContainerPropsType = MapDispatchToProps & MapStateToPropsType


class ProfileContainer extends React.Component <ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfileTC(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

//@ts-ignore
const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => ({
    profile: (state.profilePage.profile) as ProfileType,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
