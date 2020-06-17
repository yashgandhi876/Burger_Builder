import React from "react";
import classes from "./Burger.css";
import BurgerIngrediant from "./BurgetIngrediants/BurgerIngrediants";

const Burger = (props) => {
  let transformedIngrediants = Object.keys(props.ingridents).map((inkey) => {
    return [...Array(props.ingridents[inkey])].map((e, i) => {
      return (
        <BurgerIngrediant key={props.ingridents[inkey] + i} type={inkey} />
      );
    });
  });
  if (transformedIngrediants.flat().length === 0) {
    transformedIngrediants = <p>Please start adding Ingrediants!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngrediant type="burger-top" />
      {transformedIngrediants}
      <BurgerIngrediant type="burger-bottom" />
    </div>
  );
};

export default Burger;
