import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../Components/UI/Spinner/Spinner';

class ContactData extends Component {
	state = {
		name: '',
		Email: '',
		Address: {
			street: '',
			postalcode: ''
		},
		showSpinner: false
	};

	orderHanlder = (event) => {
		event.preventDefault();
		this.setState({ showSpinner: true });

		let data = {
			ingrediants: this.props.ingridents,
			totalPrice: this.props.price,
			customer: {
				name: `yash gandhi`,
				address: `test street`,
				zipcode: 12423
			},
			email: 'test@test.com',
			deiveryMethod: 'fastest'
		};

		axios
			.post('/order.json', data)
			.then(() => {
				this.setState({ showSpinner: false });
				this.props.history.push('/');
			})
			.catch((err) => {
				console.log(err.message);
				this.setState({ showSpinner: false });
			});
	};

	render() {
		let form = this.state.loading ? (
			<Spinner />
		) : (
			<form>
				<input className={classes.Input} type="text" placeholder="Your Name" name="name" />
				<input className={classes.Input} type="email" placeholder="Your Mail" name="email" />
				<input className={classes.Input} type="text" placeholder="Street" name="street" />
				<input className={classes.Input} type="text" placeholder="Postal Code" name="postal" />
				<Button btnType="Success" click={this.orderHanlder}>
					ORDER
				</Button>
			</form>
		);
		return (
			<div className={classes.ContactData}>
				<h4>Enter your contact data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;
