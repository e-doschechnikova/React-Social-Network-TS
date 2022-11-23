import React from "react";
import styles from "../Post/Post.module.css";

export const Post = (props: PostPropsType) => {

    return (
        <div className={styles.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdqqPzrcB7K0LSwz966zx0fxieAxQ1lNs_g&usqp=CAU"
                alt="avatar"
            />
            {props.post}
            <div>
                <span>{props.likesCount} likes</span>
            </div>
        </div>
    );
};

///----------- type -----------\\\
export type PostPropsType = {
    post: string;
    likesCount: number;
};
