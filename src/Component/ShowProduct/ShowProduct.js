import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import './ShowProduct.css'

const ShowProduct = ({product,handelAddTocart}) => {
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
            <div className='button-container'>
            <button onClick={()=>handelAddTocart(product)}  className='btn'>
            <p>Add To Cart </p>
            </button>
            <h4><BsFillCartFill/></h4>
            </div>
        </div>
    );
};

export default ShowProduct;