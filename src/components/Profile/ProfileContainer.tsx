import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {ReduxStateType} from "../../Redux/Redux-Store";
import {ProfileType, setUserProfileAC} from "../../Redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";



type PathParamsType = {
    userId: string
}

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfileAC(response.data)

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