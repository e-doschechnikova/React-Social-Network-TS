import React from 'react';
import {v1} from "uuid";
import Misha from "../img/Misha.jpg"
import Lenya from "../img/Lenya.jpg"
import Tyson from "../img/Tyson.jpg"
import Grisha from "../img/Grisha.jpg"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


type LocationType = {
    city: string,
    country: string
}
export type UserType = {
    id: string,
    followed: boolean,
    avatar: string
    fullName: string,
    status: string,
    location: LocationType
}

export type InitialStateType = {
    users: Array<UserType>
}

const initialState: InitialStateType = {
    users: [
        {
            id: v1(),
            followed: true,
            avatar: Misha,
            fullName: "Misha",
            status: "I`m a happy and smiling dog!!!!",
            location: {city: "St. Petersburg", country: "Russia"}
        },
        {
            id: v1(),
            followed: true,
            avatar: Lenya,
            fullName: "Lenya",
            status: "I want to eat! :/",
            location: {city: "St. Petersburg", country: "Russia"}
        },
        {
            id: v1(),
            followed: true,
            avatar: Tyson,
            fullName: "Tyson",
            status: "I`m a philosopher. Do you want to talk?",
            location: {city: "St. Petersburg", country: "Russia"}
        },
        {
            id: v1(),
            followed: false,
            avatar: Grisha,
            fullName: "Grisha",
            status: "I`m a good cat! :)))",
            location: {city: "St. Petersburg", country: "Russia"}
        }
    ]
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