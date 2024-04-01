import { useContext } from 'react'
import './CartWidget.css'
import * as Icon from 'react-bootstrap-icons'
import { CartContext } from '../Context/CartContext'

const CartWidget = () =>{

    const {productoTotal} = useContext(CartContext)

    return(
            <button className='botonNavbar'>
                <Icon.CartFill className='carrito'/>
                <span>{productoTotal()|| ''}</span>
            </button>
    )
}

export default CartWidget