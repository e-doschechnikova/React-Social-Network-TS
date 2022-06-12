import React from "react";
import { MyPostPropsType } from "../../../index";
import styles from "./MyPost.module.css";
import { Post } from "./Post/Post";

export const MyPost = (props: MyPostPropsType) => {
  let postsElements = props.posts.map((post) => (
    <Post post={post.post} likesCount={post.likesCount} />
  ));

  return (
    <div className={styles.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <div className={styles.posts}>{postsElements}</div>
      </div>
    </div>
  );
};
