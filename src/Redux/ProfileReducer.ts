import {v1} from "uuid";
import {sendMessageAC, updateNewMessageTextAC} from "./DialogsReducer";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"

///------------------------- types -------------------------///

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
    newPostText: string,

}

export type ProfileActionsTypes =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>
    | ReturnType<typeof setUserProfileAC>

///--------------------------------------------------------///

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
    newPostText: "hi",
    profile: null,

}

const ProfileReducer = (state: ProfilePageStateType = initialState, action: ProfileActionsTypes) => {
    switch (action.type) {
        case ADD_POST:

            return {
                ...state, posts: [...state.posts, {id: v1(), post: state.newPostText, likesCount: 0}],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT:

            return {
                ...state, newPostText: action.newText
            }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

///-------------------------- AC --------------------------///

export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const;
};

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText,
    } as const;
};

export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE, profile
    } as const;
}

export default ProfileReducer
