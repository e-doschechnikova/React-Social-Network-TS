import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.item} ${styles.active}`}>
        <a>Profile</a>
      </div>
      <div className={styles.item}>
        <a>Messages</a>
      </div>
      <div className={styles.item}>
        <a>News</a>
      </div>
      <div className={styles.item}>
        <a>Music</a>
      </div>
      <div className={styles.item}>
        <a>Setting</a>
      </div>
    </nav>
  );
};
