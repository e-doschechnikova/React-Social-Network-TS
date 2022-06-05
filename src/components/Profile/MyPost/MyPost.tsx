import React from "react";
import styles from "./MyPost.module.css";
import { Post } from "./Post/Post";

export const MyPost = () => {
  let postData = [
    { id: 1, post: "Hi", likesCount: 5 },
    { id: 2, post: "I`am lost!!!", likesCount: 2 },
    { id: 3, post: "Wow! It's really you ", likesCount: 15 },
    { id: 4, post: "How are you?", likesCount: 4 },
    { id: 5, post: "And who is it? And how did I get here?", likesCount: 1 },
  ];

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
        <div className={styles.posts}>
          <Post post={postData[0].post} likesCount={postData[0].likesCount} />
          <Post post={postData[1].post} likesCount={postData[1].likesCount} />
          <Post post={postData[2].post} likesCount={postData[2].likesCount} />
          <Post post={postData[3].post} likesCount={postData[3].likesCount} />
          <Post post={postData[4].post} likesCount={postData[4].likesCount} />
        </div>
      </div>
    </div>
  );
};
