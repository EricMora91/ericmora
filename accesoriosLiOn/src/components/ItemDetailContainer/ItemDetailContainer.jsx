import './ItemDetailContainer.css'
import {Link, useParams } from 'react-router-dom';
import productosJSON from "/src/productos.json"


const ItemDetailContainer = () =>{


    const {itemId} = useParams();
    const detailProduct = productosJSON.find((item) => item.itemId==itemId);
    const {imagen1, nombre, descripción, precio, stock} = detailProduct


    return(
        <section className="itemDetail" id={`item${itemId}`}>
            <div className='itemContainer'>
                <img className= "imgDetail" src={`/${imagen1}`} alt="productos" />
                <h2>{nombre}</h2>
                <p>{descripción}</p>
                <h2>${precio}</h2>
                <h6>En Stock: {stock}</h6>
                <button className='agregar'>Agregar al carrito</button>
                <span className='cerrar'><Link to="/">X</Link></span>
            </div>
        </section>)
}

export default ItemDetailContainer