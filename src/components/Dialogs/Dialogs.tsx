import React, {ChangeEvent} from "react";
import {DialogItem} from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
        <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
    ));
    const messagesElements = props.dialogsPage.messages.map((message) => (
        <Message key={message.id} message={message.message}/>
    ));
    const newMessageText = props.dialogsPage.messageForNewMessage;

    const onSendMessageClick = () => {
        props.sendMessage();
    };
    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.messageForNewMessage(event.currentTarget.value)

    };
    // eslint-disable-next-line react/jsx-no-undef
    if (!props.isAuth) return <Redirect to="/login"/>

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsElements}</div>
            <div className={styles.messages}>{messagesElements}</div>
            <div>
        <textarea className={styles.textForm}
                  value={newMessageText}
                  onChange={onNewMessageChange}
                  placeholder="✎ write something..."
        ></textarea>{" "}
            </div>
            <div>
                <button onClick={onSendMessageClick}>
                    send
                </button>

            </div>
        </div>
    );
};
