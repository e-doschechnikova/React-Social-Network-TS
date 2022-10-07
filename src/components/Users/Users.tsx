import React from 'react';
import styles from "./Users.module.css"
import {UsersContainerPropsType} from "./UsersContainer"
import axios from "axios";
import userPhoto from "../../assets/images/UserPhoto.png"


export const Users = (props: UsersContainerPropsType) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUser(response.data.items)
        })
    }
    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img alt={"name"} src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
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
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};


