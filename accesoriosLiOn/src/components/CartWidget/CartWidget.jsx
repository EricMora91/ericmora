import './CartWidget.css'
import * as Icon from 'react-bootstrap-icons'

const CartWidget = () =>{
    return(
            <button className='botonNavbar'>
                <Icon.CartFill className='carrito'/>
                <span>2</span>
            </button>
    )
}

export default CartWidget