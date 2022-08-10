import React from "react";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../Redux/Store";
import {MyPostContainer} from "./MyPost/MyPostContainer";

type ProfilePropsType = {}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
            {/*<MyPost*/}
            {/*    posts={props.posts}*/}
            {/*    // dispatch={props.dispatch}*/}
            {/*    // addPostCallBack={props.addPostCallBack}*/}
            {/*    messageForNewPost={props.messageForNewPost}*/}
            {/*    updateNewPostText={props.updateNewPostText}*/}
            {/*/>*/}
        </div>
    );
};
