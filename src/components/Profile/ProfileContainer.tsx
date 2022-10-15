import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {ReduxStateType} from "../../Redux/Redux-Store";
import {ProfileType, setUserProfileAC} from "../../Redux/ProfileReducer";

type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToProps = {
    setUserProfileAC: (profile: ProfileType) => void
}

type ProfileContainerPropsType = MapDispatchToProps & MapStateToPropsType

class ProfileContainer extends React.Component <ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer)