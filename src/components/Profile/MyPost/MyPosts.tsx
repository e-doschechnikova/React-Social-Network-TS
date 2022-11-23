import React from "react";
import styles from "./MyPost.module.css";
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

export const MyPosts = (props: MyPostsPropsType) => {

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
          <textarea className={styles.textForm}
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}
          ></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>
                        Add post
                    </button>
                </div>
                <div className={styles.posts}>{postsElements}</div>
            </div>
        </div>
    );
};
