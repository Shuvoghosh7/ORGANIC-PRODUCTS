import { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = ({cart,clearItem,}) => {
    const[random,setRandom]=useState([])
    const chooseItem =(cart)=>{
        const randomNumber=cart[Math.floor(Math.random() * cart.length)]
        const newArray =[...random,randomNumber]
        setRandom(newArray) 
    }
    return (
        <div className='CartItem'>
            {
                cart.map(item => <CartItem
                item={item}
                key={item.id}
                />)
            }
            <div className='randomItem'>
            {
              random.map(randomItem => <h4>
                {randomItem.name}
                </h4>)
            }
            </div>
            
            <button onClick={()=>chooseItem(cart)}  className='random-btn'>CHOOSE 1 FOR ME</button>
            <button className='clear-btn'  onClick={clearItem}>CHOOSE AGAIN</button>
        </div>
    );
    
};

export default Cart;