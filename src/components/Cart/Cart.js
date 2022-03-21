import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum,country)=> sum + country.population,0);
    return (
        <div>
            <h5>Cart added : {cart.length}</h5>
            <p><small>Total Population: {totalPopulation}</small></p>
        </div>
    );
};

export default Cart;