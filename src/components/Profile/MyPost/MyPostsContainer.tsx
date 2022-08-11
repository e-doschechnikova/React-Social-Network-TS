import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {PostStateType} from "../../../Redux/Store";
import StoreContext from "../../../StoreContext";

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
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                const addPost = () => {
                    store.dispatch(addPostAC());
                };

                let onPostChange = (text: string) => {
                    let action = updateNewPostTextAC(text)
                    store.dispatch(action)
                };
                return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                                posts={props.store._state.profilePage.posts}
                                messageForNewPost={props.store._state.profilePage.messageForNewPost}/>

            }}</StoreContext.Consumer>

    )
}
