import React from 'react';

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


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
}

const initialState: InitialStateType = {
    users: []
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
        default:
            return state

    }
};


export type UsersActionsType =
    ReturnType<typeof FollowAC>
    | ReturnType<typeof UnfollowAC>
    | ReturnType<typeof SetUsersAC>

export const FollowAC = (userId: string) => ({type: FOLLOW, userId}) as const
export const UnfollowAC = (userId: string) => ({type: UNFOLLOW, userId}) as const
export const SetUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users}) as const


export default UsersReducer;