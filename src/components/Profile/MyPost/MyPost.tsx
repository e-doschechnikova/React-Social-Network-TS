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
          <Post message="Hi!" likesCount={5} />
          <Post message="I`am lost!!!" likesCount={2} />
          <Post message="Wow! It's really you " likesCount={15} />
          <Post message="How are you?" likesCount={4} />
          <Post
            message="And who is it? And how did I get here?"
            likesCount={1}
          />
        </div>
      </div>
    </div>
  );
};
