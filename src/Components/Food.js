import React from 'react';
import PropTypes from 'prop-types';

export default function Food({ food }) {
	const { name, image, price, grams, description } = food;
	return (
		<div className="col-lg-3 card menu-item">
			<img className="card-img-top menu-item-pic" src={image} />
			<div className="card-body">
				<h4 className="card-title menu-item-title">{name}</h4>
				<h5 className="card-subtitle menu-item-price text-muted">{price}</h5>
				<h5 className="card-subtitle text-muted menu-item-grams">{grams}</h5>
				<p className="card-text menu-item-description">{description}</p>
			</div>
		</div>
	);
}

Food.propTypes = {
	food: PropTypes.shape({
		name: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})
};
