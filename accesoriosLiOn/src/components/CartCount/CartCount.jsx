import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

const CartCount = ({producto}) =>{

    const {cart, setCart} = useContext(CartContext)

    const carrito = (Object.assign({},...producto))

    const precio = carrito.precio

    const cantidad = carrito.cantidad

    const [cantidadCarrito, setCantidadCarrito] = useState(cantidad)

    const handleDecrement = () =>{
        if (cantidadCarrito > 1){
            setCantidadCarrito(cantidadPrevia => cantidadPrevia - 1)

            const item = {...producto}
            setCart(cart.map(product =>{
                if(product.id === item[0].id) {
                    return {...product, cantidad: product.cantidad - 1}}
                else{return product}}))
        }
    }

    const handleIncrement = () =>{
        if (cantidadCarrito < 10 ){
            setCantidadCarrito(cantidadPrevia => cantidadPrevia + 1)
            
        const item = {...producto}
            setCart(cart.map(product =>{
                if(product.id === item[0].id) {
                    return {...product, cantidad: product.cantidad + 1}}
                else{return product}}))
        } 
    }


    return(
        <div className='textoCantidad'>
            <h5>Subtotal: ${`${precio*cantidadCarrito}`}</h5>
            Cantidad: <span className='cantidad'>{cantidadCarrito} </span>
                <br />
                <button className='botonCantidad' onClick={handleDecrement}>-</button>
                <button className='botonCantidad' onClick={handleIncrement}>+</button>
        </div>
    )

}

export default CartCount