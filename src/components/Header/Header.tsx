import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

export const Header = ({isAuth, login, logout}: HeaderPropsType) => {

    const imageSrc = require("../../assets/images/logo.png");
    const imageSrcLogo = require("../../assets/images/logo1.png");
// declare function require(name: string): string;

    return (
        <header className={styles.header}>
            <img src={imageSrc} alt=""/>
            <div className={styles.loginBlock}>
                {isAuth
                    ? <div>{login} - <button onClick={logout}>Log out</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
};

///----------- type -----------\\\
type HeaderPropsType = {
    isAuth: boolean,
    login: string | null,
    logout: () => void
}
