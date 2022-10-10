import React from 'react';

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"


type LocationType = {
    city: string,
    country: string
}
export type UserType = {
    id: string,
    photos: {
        small: string,
        large: string
    }
    followed: boolean,
    name: string,
    status: string,
    location: LocationType
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 2
}

const UsersReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        default:
            return state

    }
};


export type UsersActionsType =
    ReturnType<typeof FollowAC>
    | ReturnType<typeof UnfollowAC>
    | ReturnType<typeof SetUsersAC>
    | ReturnType<typeof SetCurrentPageAC>

export const FollowAC = (userId: string) => ({type: FOLLOW, userId}) as const
export const UnfollowAC = (userId: string) => ({type: UNFOLLOW, userId}) as const
export const SetUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users}) as const
export const SetCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage}) as const

export default UsersReducer;