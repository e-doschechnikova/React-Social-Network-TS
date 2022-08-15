import React from 'react';
import styles from "./Users.module.css"
import {UserType} from "../../Redux/UsersReducer";

type UsersPropsType = {
    users: Array<UserType>
}

export const Users = (props: UsersPropsType) => {
    return (
        <div>
            HELLO! I`M USER!
        </div>
    );
};


