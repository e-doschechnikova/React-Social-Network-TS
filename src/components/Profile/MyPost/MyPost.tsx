import React from "react";
import styles from "./MyPost.module.css";
import { Post } from "./Post/Post";

export const MyPost = () => {
  let posts = [
    { id: 1, post: "Hi", likesCount: 5 },
    { id: 2, post: "I`am lost!!!", likesCount: 2 },
    { id: 3, post: "Wow! It's really you ", likesCount: 15 },
    { id: 4, post: "How are you?", likesCount: 4 },
    { id: 5, post: "And who is it? And how did I get here?", likesCount: 1 },
  ];

  let postsElements = posts.map((post) => (
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
