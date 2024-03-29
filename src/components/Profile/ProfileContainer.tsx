import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { ReduxStateType } from "../../Redux/Redux-Store";
import {
  getStatusTC,
  getUserProfileTC,
  ProfileType,
  updateStatusTC,
} from "../../Redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId //24887;
    }

    this.props.getUserProfileTC(userId);
    this.props.getStatusTC(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatusTC={this.props.updateStatusTC}
      />
    );
  }
}
//@ts-ignore
const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => ({
  profile: state.profilePage.profile as ProfileType,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

///----------- types -----------\\\
type PathParamsType = {
  userId: number;
};
//@ts-ignore
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> &
  MapProfileContainerPropsType;
type MapStateToPropsType = {
  profile: ProfileType;
  status: string;
  authorizedUserId: number | null;
  isAuth: boolean;
};
type MapDispatchToProps = {
  getUserProfileTC: (userId: number) => void;
  getStatusTC: (userId: number) => void;
  updateStatusTC: (status: string) => void;
};
type MapProfileContainerPropsType = MapDispatchToProps & MapStateToPropsType;

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfileTC, getStatusTC, updateStatusTC }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
