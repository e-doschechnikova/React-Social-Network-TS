import React from "react";
import styles from "./MyPost.module.css";
import {Post} from "./Post/Post";
import {Button} from "@material-ui/core";

import {MyPostsPropsType} from "./MyPostContainer";

export const MyPost = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map((post) => (
        <Post key={post.id} post={post.post} likesCount={post.likesCount}/>
    ));

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value : "";
        props.updateNewPostText(text);
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
          <textarea
              ref={newPostElement}
              onChange={onPostChange}
              value={props.messageForNewPost}
          ></textarea>
                </div>
                <div>
                    <Button variant={"contained"} color={"inherit"} onClick={onAddPost}>
                        Add post
                    </Button>
                </div>
                <div className={styles.posts}>{postsElements}</div>
            </div>
        </div>
    );
};
