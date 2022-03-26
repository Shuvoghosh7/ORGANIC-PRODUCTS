import { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = ({cart,clearItem}) => {
    
    console.log(cart)
    
    return (
        <div>
            {
                cart.map(item => <CartItem
                item={item}
                key={item.id}
                />)
            }
           
            <button onClick={()=>cart[Math.floor(Math.random() * cart.length)]} className='random-btn'>CHOOSE 1 FOR ME</button>
            <button className='clear-btn'  onClick={clearItem}>CHOOSE AGAIN</button>
        </div>
    );
    
};

export default Cart;