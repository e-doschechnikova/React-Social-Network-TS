import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

type DialogItemPropsType = {
  id: number;
  name: string;
};

export const DialogItem = (props: DialogItemPropsType) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={styles.dialog + " " + styles.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};
