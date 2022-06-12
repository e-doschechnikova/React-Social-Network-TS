import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { ProfilePagePropsType } from "../..";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { DialogsMessagesPropsType } from "../..";

export const Dialogs = (props: DialogsMessagesPropsType) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
    </div>
  );
};
