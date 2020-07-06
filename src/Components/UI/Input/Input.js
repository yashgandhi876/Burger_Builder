import React from 'react';

const Input = (props) => {
	// let

	return (
		<div>
			<label htmlFor={props.label}>{props.label}</label>
			<input type="text" />
		</div>
	);
};

export default Input;
