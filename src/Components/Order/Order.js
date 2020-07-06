import React from 'react';
import classes from './Order.css';

const Order = (props) => {
	let topping = [];
	for (let i in props.ingrediants) {
		topping.push({ name: i, amount: props.ingrediants[i] });
	}

	const IngrediantsShow = topping.map((ele) => (
		<span
			key={ele.name}
			style={{
				textTransform: 'capitalize',
				border: '1px solid #ccc',
				margin: '0 8px',
				padding: '5px',
				display: 'inline-block'
			}}
		>
			{ele.name} ({ele.amount})
		</span>
	));

	return (
		<div className={classes.Order}>
			<p>Ingridents:{IngrediantsShow}</p>
			<p>
				Price: <strong>INR: {props.price}</strong>
			</p>
		</div>
	);
};

export default Order;
