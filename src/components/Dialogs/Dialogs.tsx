import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

type DialogItemPropsType = {
  id: number;
  name: string;
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
  let dialogsData = [
    { id: 1, name: "Lama Iliya" },
    { id: 2, name: "Lama Mama" },
    { id: 3, name: "Lama Papa" },
    { id: 4, name: "Lama Ira" },
    { id: 5, name: "Lama Egor" },
  ];

  let dialogsElements = dialogsData.map((dialog) => {
    <DialogItem name={dialog.name} id={dialog.id} />;
  });

  let messageData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Where are you?" },
    { id: 3, message: "OK!" },
    { id: 4, message: "See you later!" },
    { id: 5, message: "Bye!" },
  ];

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{dialogsElements}</div>
      <div className={styles.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
        <Message message={messageData[3].message} />
        <Message message={messageData[4].message} />
      </div>
    </div>
  );
};
