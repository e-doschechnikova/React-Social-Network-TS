import React from "react";
import styles from "./Header.module.css";

const imageSrc = require("../img/logo.png");

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={imageSrc} alt="" />
    </header>
  );
};
