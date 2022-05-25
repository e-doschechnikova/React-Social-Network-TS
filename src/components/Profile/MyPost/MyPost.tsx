import React from "react";
import styles from "./MyPost.module.css";

export const MyPost = () => {
  return (
    <div className={styles.content}>
      <div>
        My post
        <div>
          New Post
          <div className={styles.post}>
            <div className={styles.item}>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};
