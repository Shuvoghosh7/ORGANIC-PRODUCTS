import React from 'react';
import './ShowProduct.css'

const ShowProduct = ({product}) => {
    console.log(product)
    const{picture,name,price}=product
    return (
        <div className='carts'>
            <div className='cart-images'>
                <img src={picture} alt="" />
            </div>
            <div>
                <h4>{name}</h4>
                <p>Price:${price}</p>
            </div>
            <button className='btn'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default ShowProduct;