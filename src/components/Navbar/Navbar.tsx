import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.item} ${styles.active}`}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/setting">Setting</NavLink>
      </div>
    </nav>
  );
};
