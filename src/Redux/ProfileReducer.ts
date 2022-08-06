import {ActionsTypes, ProfilePageStateType} from "./Store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

type PostStateType = {
    id: number;
    post: string;
    likesCount: number;
};

const ProfileReducer = (state: ProfilePageStateType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostStateType = {
                id: 5,
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
