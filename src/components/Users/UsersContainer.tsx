import React from "react";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/Redux-Store";
import {
    FollowAC, GetUsersTC,
    SetCurrentPageAC,
    ToggleFollowingProgressAC,
    UnfollowAC,
    UserType
} from "../../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader";


type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>


}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void,
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

class UsersContainer extends React.Component <UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

export default connect(mapStateToProps, {
    follow: FollowAC,
    unfollow: UnfollowAC,
    setCurrentPage: SetCurrentPageAC,
    toggleFollowingProgress: ToggleFollowingProgressAC,
    getUsers: GetUsersTC
})(UsersContainer)


// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userId: string) => {
//             dispatch(FollowAC(userId))
//         },
//         unfollow: (userId: string) => {
//             dispatch(UnfollowAC(userId))
//         },
//         setUser: (users: Array<UserType>) => {
//             dispatch(SetUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(SetCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(SetTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(ToggleIsFetchingAC(isFetching))
//         }
//     }
// }

