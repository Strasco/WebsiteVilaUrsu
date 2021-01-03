import React from 'react'
import PropTypes from 'prop-types'

export default function Food({food}) {
    const{name,image,price,grams, description} = food;
    return (
        <div className="menu-item">
            <div><img className="menu-item-pic" src={image}></img></div>
            <div className="menu-item-title">{name}</div>
            <div className="menu-item-price">{price}
                <div className="menu-item-grams">{grams}</div>
            </div>
            
            <p className="menu-item-description">{description}</p>
        </div>
    );
}

Food.propTypes ={
    food:PropTypes.shape({
        name:PropTypes.string.isRequired,
        image:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
    })
}