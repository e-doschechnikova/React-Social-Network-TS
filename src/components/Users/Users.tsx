import React from 'react';
import styles from "./Users.module.css"
import {UsersContainerPropsType} from "./UsersContainer"
import axios from "axios";
import userPhoto from "../../assets/images/UserPhoto.png"

class Users extends React.Component <UsersContainerPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUser(response.data.items)
        });
    }

    render() {

        const pagesCount = this.props.totalUsersCount / this.props.pageSize;

        const pages = [];
        for (let i = 0; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && styles.selectedPage}>{p}</span>
                })}
            </div>
            {this.props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img alt={"name"} src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </div>
                    <div>
                            {user.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(user.id)
                                }}>follow</button>
                                : <button onClick={() => {
                                    this.props.follow(user.id)
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
    }

}

export default Users


