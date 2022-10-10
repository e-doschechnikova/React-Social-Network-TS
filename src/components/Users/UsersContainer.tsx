import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {ReduxStateType} from "../../Redux/Redux-Store";
import {Dispatch} from "redux";
import {FollowAC, SetUsersAC, UnfollowAC, UserType} from "../../Redux/UsersReducer";

type MapStateToPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number

}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUser: (users: Array<UserType>) => void
}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: ReduxStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(FollowAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(UnfollowAC(userId))
        },
        setUser: (users: Array<UserType>) => {
            dispatch(SetUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

