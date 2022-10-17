import React from 'react';

const SET_USER_DATA = "SET_USER_DATA"

export type AuthStateType = {
    userId: number | null,
    email: string | null,
    login: string | null
}

const initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null
}

const AuthReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}


export type AuthActionsType =
    ReturnType<typeof setUserDataAC>

export const setUserDataAC = (userId: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
})


export default AuthReducer;