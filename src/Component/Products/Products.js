import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ShowProduct from '../ShowProduct/ShowProduct';
import './Products.css'


const Products = () => {
    const[products,setProducts]=useState([])
    const[cart,setCart]=useState([])

    const handelAddTocart= (product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
    }
    const clearItem =()=>{
        const x=[[]]
        setCart(x)
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