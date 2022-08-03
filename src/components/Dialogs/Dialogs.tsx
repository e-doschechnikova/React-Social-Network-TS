import React, { ChangeEvent } from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import {
  DialogPagePropsType,
  sendMessageAC,
  updateNewMessageTextAC,
} from "../../redux/State";
import { Button, IconButton } from "@material-ui/core";
import { SendRounded } from "@material-ui/icons";

export const Dialogs = (props: DialogPagePropsType) => {
  const dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = props.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));
  const newMessageText = props.newMessageText;

  const onSendMessageClick = () => {
    props.dispatch(sendMessageAC());
  };
  const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewMessageTextAC(event.currentTarget.value));
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>{messagesElements}</div>
      <div>
        <textarea
          value={newMessageText}
          onChange={onNewMessageChange}
          placeholder="enter your message"
        ></textarea>{" "}
      </div>
      <div>
        <IconButton size={"small"}>
          <Button variant={"contained"} onClick={onSendMessageClick}>
            send message
            <SendRounded></SendRounded>
          </Button>{" "}
        </IconButton>
      </div>
    </div>
  );
};
