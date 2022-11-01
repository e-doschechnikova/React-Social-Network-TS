import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean,
    login: string | null
}

const imageSrc = require("../../assets/images/logo.png");
// declare function require(name: string): string;

export const Header = ({isAuth, login}: HeaderPropsType) => {
    return (
        <header className={styles.header}>
            <img src={imageSrc} alt=""/>
            <div className={styles.loginBlock}>
                {isAuth ? login :
                    <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
};
