import React from "react";
import styles from "../Post/Post.module.css";

export type postPropsType = {
  message: string;
  likesCount: number;
};

export const Post = (props: postPropsType) => {
  return (
    <div className={styles.item}>
      <img
        src="https://images.unsplash.com/photo-1524568000-769b511e73de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>{props.likesCount} likes</span>
      </div>
    </div>
  );
};
