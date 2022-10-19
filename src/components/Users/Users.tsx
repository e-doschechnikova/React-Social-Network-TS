import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/UserPhoto.png";
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onPageChanged: (page: number) => void
    follow: (userId: number) => void,
    unfollow: (userId: number) => void

}


export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    pageSize,
                                                    totalUsersCount,
                                                    currentPage,
                                                    onPageChanged,
                                                    follow,
                                                    unfollow
                                                }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div>
            <div>
                {pages.map(p => {
                    return <span key={p} className={currentPage === p ? styles.selectedPage : styles.page}
                                 onClick={(e) => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {users.map(user => {
                    console.log(user.followed)
                    return (<div key={user.id}>
                <span>
                    <div>
                     <NavLink to={"/profile/" + user.id}>
                        <img alt={"name"} src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                      </NavLink>
                    </div>
                    <div>
                            {user.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "ce3b32cf-97cc-432e-ab93-6dfda4bfd63f"
                                            }
                                        }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            unfollow(user.id)
                                        }
                                    });
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "ce3b32cf-97cc-432e-ab93-6dfda4bfd63f"
                                        }
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            follow(user.id)
                                        }
                                    });
                                }}>Follow</button>}
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
                    </div>)
                }
            )}
        </div>
    );
};

