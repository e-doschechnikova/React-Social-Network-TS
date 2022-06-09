import React from "react";
import { MyPost } from "./MyPost/MyPost";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.css";
import { PostsPropsType } from "../../index";


export const Profile = (props: PostsPropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost posts={props.posts} />
    </div>
  );
};
