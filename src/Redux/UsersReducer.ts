import React from 'react';
import {v1} from "uuid";
import {text} from "stream/consumers";


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

type LocationType = {
    city: string,
    country: string
}
type UsersType = {
    id: string,
    followed: boolean
    fullName: string,
    status: string,
    location: LocationType
}

type UsersPageStateType = {
    users: Array<UsersType>
}

const initialState: UsersPageStateType = {
    users: [
        {
            id: v1(),
            followed: true,
            fullName: "Misha",
            status: "I`m a happy and smiling dog!!!!",
            location: {city: "St. Petersburg", country: "Russia"}
        },
        {
            id: v1(),
            followed: true,
            fullName: "Lenya",
            status: "I want to eat! :/",
            location: {city: "St. Petersburg", country: "Russia"}
        },
        {
            id: v1(),
            followed: true,
            fullName: "Tyson",
            status: "I`m a philosopher. Do you want to talk?",
            location: {city: "St. Petersburg", country: "Russia"}
        },
        {
            id: v1(),
            followed: false,
            fullName: "Murka",
            status: "I`m a good cat! :)))",
            location: {city: "St. Petersburg", country: "Russia"}
        }
    ]
}

const UsersReducer = (state: UsersPageStateType = initialState, action: UsersActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(user => user.)}
        case UNFOLLOW:
        default:
            return state

    }
};


export type UsersActionsType = ReturnType<typeof FollowAC> | ReturnType<typeof UnfollowAC>
export const FollowAC = (userId: string) => ({type: FOLLOW, userId})
export const UnfollowAC = (userId: string) => ({type: UNFOLLOW, userId})

export default UsersReducer;