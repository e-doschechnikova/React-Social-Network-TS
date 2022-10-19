import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/Redux-Store";
import {ProfileType, setUserProfileAC} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getProfile} from "../../api/api";



type PathParamsType = {
    userId: number
}

//@ts-ignore
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & MapProfileContainerPropsType

type MapStateToPropsType = {
    profile: ProfileType,

}
type MapDispatchToProps = {
    setUserProfileAC: (profile: ProfileType) => void
}
type MapProfileContainerPropsType = MapDispatchToProps & MapStateToPropsType

class ProfileContainer extends React.Component <ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        getProfile(userId).then(data => {
            this.props.setUserProfileAC(data)

        });
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
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfileAC})(WithUrlDataContainerComponent)