import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import ShowProduct from '../ShowProduct/ShowProduct';
import './Products.css'


const Products = () => {
    const[products,setProducts]=useState([])
    const[cart,setCart]=useState([])
    const handelAddTocart= (product)=>{
        const newCart=[...cart,product]
        if(newCart.length <= 4){
            setCart(newCart)
        }
        else{
            alert('Not prosible choose more then 4')
        }  
    }
    const clearItem =()=>{
        const removeItem=[]
        setCart(removeItem)
    }
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='products'>
            <div className="product-container">
                    {
                      products.map(product =>
                      <ShowProduct
                      key={product.id}  
                       product={product}
                       handelAddTocart={handelAddTocart}
                      /> )  
                    }
                    
            </div>
            <div className="cart-container">
                <h1>Selected item</h1>
                <Cart 
                cart={cart}
                clearItem={clearItem}
                />
            </div>

        </div>
    );
};

export default Products;