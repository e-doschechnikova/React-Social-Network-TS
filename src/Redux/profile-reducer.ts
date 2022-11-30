import {v1} from "uuid";
import {sendMessageAC, updateNewMessageTextAC} from "./dialogs-reducer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS "

export const initialState: ProfilePageStateType = {
    posts: [
        {id: v1(), post: "Hi", likesCount: 5},
        {id: v1(), post: "I`am lost!!!", likesCount: 2},
        {id: v1(), post: "Wow! It's really you ", likesCount: 15},
        {id: v1(), post: "How are you?", likesCount: 4},
        {
            id: v1(),
            post: "And who is it? And how did I get here?",
            likesCount: 1,
        },
    ],
    profile: null,
    status: ""

}

const ProfileReducer = (state: ProfilePageStateType = initialState, action: ProfileActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, posts: [...state.posts, {id: v1(), post: action.newPostText, likesCount: 0}],
                newPostText: ""
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

///----------- action creators -----------\\\
export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST, newPostText
    } as const;
};
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE, profile
    } as const;
}
export const setStatusAC = (status: string) => {
    return {
        type: SET_STATUS, status
    } as const;
}

///----------- thunks creators -----------\\\
export const getUserProfileTC = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfileAC(data))

    });
}
export const getStatusTC = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(res => {
        dispatch(setStatusAC(res.data))
    });
}
export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
    });
}

///----------- types -----------\\\
export type PostType = {
    id: string;
    post: string;
    likesCount: number;
};
export type ProfileType = {
    aboutMe?: string
    contacts?: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    userId?: number
    photos?: {
        small: string
        large: string
    }
}
export type ProfilePageStateType = {
    posts: Array<PostType>
    profile: ProfileType | null,
    status: string
}
export type ProfileActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>

export default ProfileReducer
