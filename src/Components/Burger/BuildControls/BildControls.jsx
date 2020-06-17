import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.css";

const BuildControls = (props) => {
  let controls = [
    { label: "Salad", type: "salad" },
    { label: "Mayo", type: "mayo" },
    { label: "Cheese", type: "cheese" },
    { label: "Bacon", type: "bacon" },
  ];
  return (
    <div className={classes.BuildControls}>
      <p>
        Current price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((e) => {
        return (
          <BuildControl
            disabled={props.disable[e.type]}
            added={() => props.ingredientAdded(e.type)}
            removed={() => {
              props.ingredientRemove(e.type);
            }}
            key={e.label}
            type={e.type}
            label={e.label}
          />
        );
      })}
      <button
        onClick={props.ordered}
        className={classes.OrderButton}
        disabled={props.price <= 60}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
