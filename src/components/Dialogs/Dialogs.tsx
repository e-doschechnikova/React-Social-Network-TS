import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import { Message } from "./Message/Message";
import { DialogPagePropsType } from "../../redux/State";
import { Button, IconButton } from "@material-ui/core";
import { SendRounded } from "@material-ui/icons";

export const Dialogs = (props: DialogPagePropsType) => {
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
      <div>
        <textarea></textarea>{" "}
        <IconButton size={"small"}>
          <Button variant={"contained"}>
            send message
            <SendRounded></SendRounded>
          </Button>{" "}
        </IconButton>
      </div>
    </div>
  );
};
