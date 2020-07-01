import React, { Component } from 'react';
import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary"
class Checkout extends Component {
    state={
        ingridents:{
            salad:1,
            bacon:1,
            cheese:1,
            mayo:1
        }
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingrident = {}
        for (let i of query.entries()){
            ingrident[i[0]]= +i[1]
        }
        this.setState({ingridents:ingrident})
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace("/checkout/contact-data")   
    }

    render() { 
        return ( 
            <div>
                <CheckoutSummary checkoutCancelled={this.checkoutCancelledHandler} checkoutContinued={this.checkoutContinuedHandler} ingridents={this.state.ingridents} />
            </div>
         );
    }
}
 
export default Checkout;