import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/UserPhoto.jpg";
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onPageChanged: (page: number) => void
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: Array<number>,
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
}


export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    pageSize,
                                                    totalUsersCount,
                                                    currentPage,
                                                    onPageChanged,
                                                    follow,
                                                    unfollow,
                                                    followingInProgress,
                                                    toggleFollowingProgress
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
                                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    toggleFollowingProgress(true, user.id)
                                    usersAPI.followUser(user.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                unfollow(user.id)
                                            }
                                            toggleFollowingProgress(false, user.id)
                                        });
                                }}>Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    toggleFollowingProgress(true, user.id)
                                    usersAPI.unfollowUser(user.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                follow(user.id)
                                            }
                                            toggleFollowingProgress(false, user.id)
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

