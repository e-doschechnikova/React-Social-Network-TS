import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

const imageSrc = require("../../img/logo.png");
// declare function require(name: string): string;

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={imageSrc} alt=""/>
            <div className={styles.loginBlock}>
                <NavLink to={"/login"}>Login</NavLink>
            </div>
        </header>
    );
};
