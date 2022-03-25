import React from 'react';
import './ShowProduct.css'

const ShowProduct = ({product}) => {
    console.log(product)
    const{picture,name,price}=product
    return (
        <div>
            <div className='cart-images'>
                <img src={picture} alt="" />
            </div>
        </div>
    );
};

export default ShowProduct;