import React from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngrediants.css";

const BurgerIngrediants = (props) => {
  let ingrediant = null;
  switch (props.type) {
    case "burger-bottom":
      ingrediant = <div className={classes.BreadBottom}></div>;
      break;
    case "burger-top":
      ingrediant = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "mayo":
      ingrediant = <div className={classes.Mayo}></div>;
      break;
    case "cheese":
      ingrediant = <div className={classes.Cheese}></div>;
      break;
    case "bacon":
      ingrediant = <div className={classes.Bacon}></div>;
      break;
    case "salad":
      ingrediant = <div className={classes.Salad}></div>;
      break;
    default:
      ingrediant = null;
  }
  return ingrediant;
};

BurgerIngrediants.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngrediants;
