import React from "react";
import { MyPost } from "./MyPost/MyPost";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.css";
import { ProfilePagePropsType } from "../../index";

export const Profile = (props: ProfilePagePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost
        posts={props.posts}
        dialogs={props.dialogs}
        messages={props.messages}
      />
    </div>
  );
};
