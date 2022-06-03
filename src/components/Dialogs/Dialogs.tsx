import React from "react";
import styles from "./Dialogs.module.css";

export const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>
        <div className={styles.dialog}>Lama Iliya</div>
        <div className={styles.dialog}>Lama Mama</div>
        <div className={styles.dialog}>Lama Papa</div>
        <div className={styles.dialog}>Lama Ira</div>
        <div className={styles.dialog}>Lama Egor</div>
      </div>
      <div className="messages">
        <div className="message">Hi</div>
        <div className="message">Where are you?</div>
        <div className="message">OK!</div>
        <div className="message">See you later!</div>
        <div className="message">Bye!</div>
      </div>
    </div>
  );
};
