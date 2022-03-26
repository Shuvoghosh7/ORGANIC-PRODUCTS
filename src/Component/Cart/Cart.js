import { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = ({cart,clearItem,}) => {
    const[random,setRandom]=useState([])
    console.log(random)
    const chooseItem =(cart)=>{
        const randomNumber=cart[Math.floor(Math.random() * cart.length)]
        const newArray =[...random,randomNumber]
        setRandom(newArray)
    }
   
    return (
        <div>
            {
                cart.map(item => <CartItem
                item={item}
                key={item.id}
                />)
            }
            <div>
            {
              random.map(randomItem => <p>
                  {randomItem.name}
                  </p>)
            }
            </div>
            
            <button onClick={()=>chooseItem(cart)}  className='random-btn'>CHOOSE 1 FOR ME</button>
            <button className='clear-btn'  onClick={clearItem}>CHOOSE AGAIN</button>
        </div>
    );
    
};

export default Cart;