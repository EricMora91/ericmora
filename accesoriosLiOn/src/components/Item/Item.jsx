import "./Item.css"
import {Link} from 'react-router-dom'

const Item = ({producto}) =>{
    const {itemId, imagen1, nombre, descripción, precio, stock} = producto
    return(
            <div className="item" id={`item${itemId}`}>
                <Link to={`/itemId/${itemId}`}>
                    <img className= "imgItem" src={`/${imagen1}`} alt="productos"/>
                </Link>
                <h2>{nombre}</h2>
                <p>{descripción}</p>
                <h2>${precio}</h2>
                <h6>En Stock: {stock}</h6>
                <button className='agregar'>Agregar al carrito</button>
            </div>
    )
}

export default Item