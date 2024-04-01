import CartCount from '../CartCount/CartCount'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import './ItemCart.css'

const ItemCart =({producto})=>{

    const {removeItem} = useContext(CartContext)

    const carrito = (Object.assign({},...producto))

    const {id, imagen, nombre, precio} = carrito

    console.log(carrito)

    return(
        <div className="itemDetail" id={`item${id}`}>
            <div className='itemContainer'>
                <img className= "imgDetail" src={`/${imagen}`} alt="productos" />
                <h2>{nombre}</h2>
                <h4>${precio}</h4>
                <br />
                <CartCount producto={producto}/>
                <br />
                <button onClick={()=> removeItem(id)} className='eliminarDelCarrito'>Eliminar</button>
            </div>
        </div>)
}

    export default ItemCart
