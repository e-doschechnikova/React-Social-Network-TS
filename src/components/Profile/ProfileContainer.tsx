import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/Redux-Store";
import {getStatusTC, getUserProfileTC, ProfileType, updateStatusTC} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component <ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusTC}/>
        )
    }
}
//@ts-ignore
const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => ({
    profile: (state.profilePage.profile) as ProfileType,
    status: (state.profilePage.status),
    isAuth: state.auth.isAuth
})
///----------- type -----------\\\
type PathParamsType = {
    userId: number
}
//@ts-ignore
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapProfileContainerPropsType
type MapStateToPropsType = {
    profile: ProfileType,
    isAuth: boolean,
    status: string,
}
type MapDispatchToProps = {
    getUserProfileTC: (userId: number) => void
    getStatusTC: (userId: number) => void,
    updateStatusTC: (status:string) => void
}
type MapProfileContainerPropsType = MapDispatchToProps & MapStateToPropsType

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)


