import React from "react";
import logo from "./wlogo.png";

export const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <img className="navbar__logo" src={logo} alt="The brand logo" />
        Wahdan GPT
      </div>
    </header>
  );
};

export default Header;
