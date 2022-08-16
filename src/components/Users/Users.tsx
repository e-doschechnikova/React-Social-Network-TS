import React from 'react';
import styles from "./Users.module.css"
import {UsersContainerPropsType} from "./UsersContainer"
import Misha from "../../img/Misha.jpg";
import Lenya from "../../img/Lenya.jpg";
import Tyson from "../../img/Tyson.jpg";
import Grisha from "../../img/Grisha.jpg";
import {v1} from "uuid";


export const Users = (props: UsersContainerPropsType) => {
    if (props.users.length === 0) {
        props.setUser([
            {
                id: v1(),
                followed: true,
                avatar: Misha,
                fullName: "Misha",
                status: "I`m a happy and smiling dog!!!!",
                location: {city: "St. Petersburg", country: "Russia"}
            },
            {
                id: v1(),
                followed: true,
                avatar: Lenya,
                fullName: "Lenya",
                status: "I want to eat! :/",
                location: {city: "St. Petersburg", country: "Russia"}
            },
            {
                id: v1(),
                followed: true,
                avatar: Tyson,
                fullName: "Tyson",
                status: "I`m a philosopher. Do you want to talk?",
                location: {city: "St. Petersburg", country: "Russia"}
            },
            {
                id: v1(),
                followed: false,
                avatar: Grisha,
                fullName: "Grisha",
                status: "I`m a good cat! :)))",
                location: {city: "St. Petersburg", country: "Russia"}
            }
        ])
    }
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


