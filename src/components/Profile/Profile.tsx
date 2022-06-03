import React from "react";
import { MyPost } from "./MyPost/MyPost";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPost />
    </div>
  );
};
