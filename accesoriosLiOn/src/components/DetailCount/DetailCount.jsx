import { useState } from "react";

const DetailCount = ({addItem}) =>{

    const [cantidad, setCantidad] = useState(1)

    const handleDecrement = () =>{
        if (cantidad > 1){
            setCantidad(cantidadPrevia => cantidadPrevia - 1)
        }
    }

    const handleIncrement = () =>{
        if (cantidad < 10 ){
            setCantidad(cantidadPrevia => cantidadPrevia + 1)
        }
    }

    return(
        <div className='textoCantidad'>
            Cantidad: 
            <button className='botonCantidad' onClick={handleDecrement}>-</button>
                <span className='cantidad'> {cantidad} </span>
            <button className='botonCantidad' onClick={handleIncrement}>+</button>
            <br />
            <br />
            <button onClick={()=> addItem(cantidad)} className='agregarCarrito'>Agregar al carrito</button>
        </div>
    )

}

export default DetailCount