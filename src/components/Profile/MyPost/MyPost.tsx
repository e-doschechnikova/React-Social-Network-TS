import React from "react";
import styles from "./MyPost.module.css";
import { Post } from "./Post/Post";

export const MyPost = () => {
  return (
    <div>
      My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <div className={styles.post}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};
