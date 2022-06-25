import React from "react";
import { MyPost } from "./MyPost/MyPost";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.css";
import { ProfilePagePropsType } from "../../redux/State";
import { addPost } from "../../redux/State";

export const Profile = (props: ProfilePagePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost posts={props.posts} addPostCallBack={addPost} />
    </div>
  );
};
