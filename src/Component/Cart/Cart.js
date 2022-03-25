import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';

const Cart = ({cart,clearItem}) => {
    return (
        <div>
            {
                cart.map(item => <CartItem
                item={item}
                />)
            }
            <button>CHOOSE 1 FOR ME</button>
            <button className='clear-btn'  onClick={clearItem}>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;