import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	render() {
		const orderlist = Object.keys(this.props.ingrediants).map((inkey) => {
			return (
				<li style={{ textTransform: 'capitalize' }} key={inkey}>
					{inkey} : {this.props.ingrediants[inkey]}
				</li>
			);
		});
		return (
			<div>
				<h1>Your Order</h1>
				<p>A delicious burger with ingrediants:</p>
				<ul>{orderlist}</ul>
				<p>
					<strong>Price : {this.props.price.toFixed(2)}</strong>
				</p>
				<p>Continue to Checkout?</p>
				<Button btnType="Danger" click={this.props.close}>
					CANCEL
				</Button>
				<Button btnType="Success" click={this.props.continue}>
					CONTINUE
				</Button>
			</div>
		);
	}
}

export default OrderSummary;
