import React, { createRef } from "react";
import { ProfilePagePropsType } from "../../../redux/State";
import styles from "./MyPost.module.css";
import { Post } from "./Post/Post";

export const MyPost = (props: ProfilePagePropsType) => {
  let postsElements = props.posts.map((post) => (
    <Post key={post.id} post={post.post} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    // let text = newPostElement.current.value;
    console.log(newPostElement.current?.value);
    alert("hi");
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
        <div className={styles.posts}>{postsElements}</div>
      </div>
    </div>
  );
};
