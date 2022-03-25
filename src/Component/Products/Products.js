import React, { useEffect, useState } from 'react';
import './Products.css'
import ShowProduct from './ShowProduct/ShowProduct';

const Products = () => {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='products'>
            <div className="product-container">
                    {
                      products.map(product => <ShowProduct
                       key={product.id}  
                       product={product}
                      /> )  
                    }
            </div>
            <div className="cart-container">
                <h1>Cart Container</h1>

            </div>

        </div>
    );
};

export default Products;