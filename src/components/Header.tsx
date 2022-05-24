import React from "react";
import "./Header.module.css";

const imageSrc = require("../img/logo.png");

export const Header = () => {
  return (
    <header className="header">
      <img src={imageSrc} alt="" />
    </header>
  );
};
