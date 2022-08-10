import {ActionsTypes, ProfilePageStateType} from "./Store";
import {v1} from "uuid";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

type PostStateType = {
    id: string;
    post: string;
    likesCount: number;
};

export const initialState: ProfilePageStateType = {
    messageForNewPost: "hi",
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
}

const ProfileReducer = (state: ProfilePageStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostStateType = {
                id: v1(),
                post: state.messageForNewPost,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.messageForNewPost = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.messageForNewPost = action.newText;
            return state;
        default:
            return state;
    }
}
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
export default ProfileReducer
