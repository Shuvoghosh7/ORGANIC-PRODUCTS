import CartItem from '../CartItem/CartItem';
import './Cart.css'

const Cart = ({cart,clearItem}) => {
    return (
        <div>
            {
                cart.map(item => <CartItem
                item={item}
                />)
            }
            <button className='random-btn'>CHOOSE 1 FOR ME</button>
            <button className='clear-btn'  onClick={clearItem}>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;