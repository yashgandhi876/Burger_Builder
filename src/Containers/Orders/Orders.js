import React, { Component } from 'react';
import Order from '../../Components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
	state = {
		orders: [],
		loading: true
	};
	componentDidMount() {
		axios
			.get('/order.json')
			.then((res) => {
				const fetchOrder = [];
				for (let i in res.data) {
					fetchOrder.push({ ...res.data[i], id: i });
				}
				this.setState({ loading: false, orders: fetchOrder });
			})
			.catch((err) => {
				this.setState({ loading: false });
			});
	}

	render() {
		return (
			<div>
				{this.state.orders.map((order) => (
					<Order ingrediants={order.ingrediants} price={order.totalPrice} key={order.id} />
				))}
			</div>
		);
	}
}

export default withErrorHandler(Orders, axios);
