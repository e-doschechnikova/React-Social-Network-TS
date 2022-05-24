import React from "react";
import styles from "./Header.module.css";

const imageSrc = require("../../img/logo.png");
// declare function require(name: string): string;

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={imageSrc} alt="" />
    </header>
  );
};
