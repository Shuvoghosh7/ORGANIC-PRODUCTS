import React from 'react';
import './CartItem.css'

const CartItem = ({item}) => {
   
    return (
       <div>
            <div className='cart-item'>
            <img src={item.picture} alt="" />
            <p>{item.name}</p>
            </div>
       </div>
    );
};

export default CartItem;