import React from "react";
import {addPostAC, PostType} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../Redux/Redux-Store";
import {Dispatch} from "redux";

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPostText:string) => dispatch(addPostAC(newPostText)),
    }
}

///----------- type -----------\\\
type mapStateToPropsType = {
    posts: Array<PostType>
}
type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}
export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

