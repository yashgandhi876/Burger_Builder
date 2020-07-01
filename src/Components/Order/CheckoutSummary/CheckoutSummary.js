import React from 'react';
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css"

const CheckoutSummary = (props) => {
    return ( 
        <div className={classes.CheckoutSummary}>
            <h1>Hope it test well!</h1>
            <div style={{width:"100%", margin:"auto"}} >
                <Burger ingridents={props.ingridents} />
            </div>
            <Button click={props.checkoutCancelled} btnType="Danger">CANCEL</Button>
            <Button click={props.checkoutContinued} btnType="Success">CONTINUE</Button>
        </div>
     );
}
 
export default CheckoutSummary;