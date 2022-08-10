import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/ProfileReducer";
import {MyPost} from "./MyPost";
import {PostStateType} from "../../../Redux/Store";

type mapStateToPropsType = {
    posts: Array<PostStateType>;
    messageForNewPost: string;
}
type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}
export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

export const MyPostContainer = (props: any) => {

    const addPost = () => {
        props.dispatch(addPostAC());
    };

    let onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.dispatch(action)
        // props.updateNewPostText(text);
    };


    return <MyPost updateNewPostText={onPostChange} addPost={addPost} posts={props.posts}
                   messageForNewPost={props.messageForNewPost}/>
};
