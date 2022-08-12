import React from 'react';
import {v1} from "uuid";

type LocationType = {
    city: string,
    country: string
}
type UsersType = {
    id: string,
    fullName: string,
    status: string,
    location: LocationType
}

type UsersPageStateType = {
    users: UsersType
}

const InitialState = {
    users: [
        {
            id: v1(),
            fullName: "Misha",
            status: "I`m a happy and smiling dog!!!!",
            location: {city: "Saint Petersbers", country: "Russia"}
        },
        {
            id: v1(),
            fullName: "Lenya",
            status: "I want to eat! :/",
            location: {city: "Saint Petersbers", country: "Russia"}
        },
        {
            id: v1(),
            fullName: "Tyson",
            status: "I`m a philosopher. Do you want to talk?",
            location: {city: "Saint Petersbers", country: "Russia"}
        },
        {
            id: v1(),
            fullName: "Murka",
            status: "I`m a good cat! :)))",
            location: {city: "Saint Petersbers", country: "Russia"}
        }
    ]
}

const UsersReducer = () => {
    let action;
    switch (action.type) {
        default:
            return state

    }
};

export default UsersReducer;