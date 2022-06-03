import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

type DialogItemPropsType = {
  name: string;
  id: string;
};

const DialogItem = (props: DialogItemPropsType) => {
  return (
    <div className={styles.dialog + " " + styles.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

type MessagePropsType = {
  message: string;
};

const Message = (props: MessagePropsType) => {
  return <div className={styles.dialog}>{props.message}</div>;
};

export const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name="Lama Iliya" id="1" />
        <DialogItem name="Lama Mama" id="2" />
        <DialogItem name="Lama Papa" id="3" />
        <DialogItem name="Lama Ira" id="4" />
        <DialogItem name="Lama Egor" id="5" />
      </div>
      <div className={styles.messages}>
        <Message message="Hi" />
        <Message message="Where are you?" />
        <Message message="OK!" />
        <Message message="See you later!" />
        <Message message="Bye!" />
      </div>
    </div>
  );
};
