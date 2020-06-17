import React from "react";
import classes from "./Logo.css";
import burgerLogo from "../../assets/Images/burgerLogo.png";

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="logo of burger" />
    </div>
  );
};

export default Logo;
