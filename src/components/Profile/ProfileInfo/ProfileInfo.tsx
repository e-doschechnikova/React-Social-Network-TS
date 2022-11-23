import React from "react";
import styles from "./ProfileInfo.module.css";
import {ProfileType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../Common/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";


export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatusTC}) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div className={styles.imageContent}>*/}
            {/*    <img*/}
            {/*        src="https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"*/}
            {/*        alt="splash-screen"*/}
            {/*    />*/}
            {/*</div>*/}
            <div className={styles.descriptionBlock}>
                <img src={profile?.photos?.large} alt={"avatar"}/>
                <ProfileStatus status={status} updateStatusTC={updateStatusTC}/>
            </div>
        </div>
    );
};

///----------- type -----------\\\
type ProfileInfoPropsType = {
    profile: null | ProfileType,
    status: string,
    updateStatusTC: (status: string) => void
}