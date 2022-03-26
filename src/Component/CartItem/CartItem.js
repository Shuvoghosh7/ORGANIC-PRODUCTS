
import './CartItem.css'


const CartItem = ({item}) => {
   
    return (
       <div className='cart-item'>
            <div className='cart-item'>
            <img src={item.picture} alt="" />
            <p>{item.name}</p>
            </div>
       </div>
    );
};

export default CartItem;