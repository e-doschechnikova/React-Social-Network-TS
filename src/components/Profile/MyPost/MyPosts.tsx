import React from "react";
import styles from "./MyPost.module.css";
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddNewPostFormRedux, FormDataType} from "./PostForm/AddNewPostForm";

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map((post) => (
        <Post key={post.id} post={post.post} likesCount={post.likesCount}/>
    ));
    const onAddPost = (formData: FormDataType) => {
        props.addPost(formData.newPostText);
    };

    return (
        <div className={styles.postsBlock}>
            <h3>what's new?</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={styles.posts}>{postsElements}</div>
        </div>
    );
};


