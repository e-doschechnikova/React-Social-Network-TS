import React from 'react';
import styles from "./Users.module.css"
import {UserType} from "../../Redux/UsersReducer";

type UsersPropsType = {
    users: Array<UserType>
    follow: (id: string) => void,
    unfollow: (id: string) => void
}

export const Users = (props: UsersPropsType) => {
    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img alt={"name"} src={user.avatar} className={styles.userPhoto}/>
                    </div>
                    <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>follow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
                                }}>unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};


