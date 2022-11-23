import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPost/MyPostsContainer";
import {ProfileType} from "../../Redux/profile-reducer";

export const Profile: React.FC<ProfilePropsType> = ({profile, status, updateStatusTC}) => {

    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatusTC={updateStatusTC}/>
            <MyPostsContainer/>
        </div>
    );
};

///----------- type -----------\\\
type ProfilePropsType = {
    profile: null | ProfileType,
    status: string,
    updateStatusTC: (status: string) => void
}