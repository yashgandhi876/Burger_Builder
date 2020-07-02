import React, { Component } from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';
import { Route } from 'react-router-dom';

class Checkout extends Component {
	state = {
		ingridents: null,
		totalPrice: 0
	};

	componentWillMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingrident = {};
		let price = 0;
		for (let i of query.entries()) {
			if (i[0] === 'price') {
				price = i[1];
			} else {
				ingrident[i[0]] = +i[1];
			}
		}
		this.setState({ ingridents: ingrident, totalPrice: price });
	}

	checkoutCancelledHandler = () => {
		this.props.history.goBack();
	};
	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	};

	render() {
		console.log(this.props.match.path);
		return (
			<div>
				<CheckoutSummary
					checkoutCancelled={this.checkoutCancelledHandler}
					checkoutContinued={this.checkoutContinuedHandler}
					ingridents={this.state.ingridents}
				/>
				<Route
					path={this.props.match.path + '/contact-data'}
					render={(props) => (
						<ContactData price={this.state.totalPrice} ingridents={this.state.ingridents} {...props} />
					)}
				/>
			</div>
		);
	}
}

export default Checkout;
