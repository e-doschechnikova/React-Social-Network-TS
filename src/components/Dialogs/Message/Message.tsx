import React from "react";
import styles from "./../Dialogs.module.css";

export const Message = (props: MessagePropsType) => {

    return <div className={styles.dialog}>{props.message}</div>;
};

///----------- type -----------\\\
type MessagePropsType = {
    message: string;
};