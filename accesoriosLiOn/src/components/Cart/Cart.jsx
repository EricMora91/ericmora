import './Cart.css'
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart'

const Cart = () =>{

    const {cart, precioTotal} = useContext(CartContext)
    console.log(cart)

    if(cart.length === 0){
        return (
            <div className="cartDetail">
                <div className='cartContainer'>
                    <p>No hay elementos en el carrito.</p>
                    <span className='cerrar'><Link className='x' to="/">X</Link></span>
                </div>
            </div>
        )
    }

    return (
        <div className='cartDetail'>
            {
                cart.map((producto => <ItemCart className='cartItem' key={producto.id} producto={[producto]}/>))
            }
            <div className='cartFooter'>
                <div className='total'>
                    <p>Total: <span className='cantidad'>{precioTotal()}</span></p> 
                    <button className='comprar'><Link className='x' to="/checkout">Terminar compra</Link></button>
                    <br />
                    <br />
                    <span className='cerrar'><Link className='x' to="/">X</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Cart