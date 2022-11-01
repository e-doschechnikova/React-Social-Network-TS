import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

const AuthReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

///------------------------- type -------------------------------\\\

export type AuthStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

const initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export type AuthActionsType =
    ReturnType<typeof setAuthUserDataAC>
///-------------------------- Action Creators --------------------------\\\

export const setAuthUserDataAC = (userId: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
})

///------------------------- Thunk Creators ------------------------------------\\\

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserDataAC(id, email, login))
            }
        })
}

export default AuthReducer;