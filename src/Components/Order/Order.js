import React from 'react';
import classes from './Order.css';

const Order = (props) => {
	return (
		<div className={classes.Order}>
			<p>Ingridents: Salad (1)</p>
			<p>
				Price: <strong>INR: 100:00</strong>
			</p>
		</div>
	);
};

export default Order;
