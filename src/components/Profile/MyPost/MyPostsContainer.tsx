import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {PostStateType} from "../../../Redux/Store";

type StateToPropsType = {
    posts: Array<PostStateType>;
    messageForNewPost: string;
}
type DispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}
export type MyPostsPropsType = StateToPropsType & DispatchToPropsType

export const MyPostsContainer = (props: any) => {

    const addPost = () => {
        props.store.dispatch(addPostAC());
    };

    let onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.store.dispatch(action)
    };
    console.log(props)
    return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={props.store._state.profilePage.posts}
                    messageForNewPost={props.store._state.profilePage.messageForNewPost}/>
};
