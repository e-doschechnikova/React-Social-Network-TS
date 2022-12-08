import {authAPI} from "../api/api";
import {AppThunk} from "./Redux-Store";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"

const initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const AuthReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

///----------- action creators -----------\\\
export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

///----------- thunks creators -----------\\\
export const getAuthUserDataTC = (): AppThunk => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserDataAC(id, email, login, true))
            }
        })
}
export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    let action = stopSubmit("login", {email: "Email is wrong"})
    dispatch(action)
    return
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            }
        })
}
export const logoutTC = (): AppThunk => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
        })
}

///----------- types -----------\\\
export type AuthStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
export type AuthActionsType =
    ReturnType<typeof setAuthUserDataAC>

export default AuthReducer;