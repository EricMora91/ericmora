import './ItemDetail.css';
import {useParams } from 'react-router-dom';
import DetailCount from "../DetailCount/DetailCount"
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import {Link} from 'react-router-dom';

const ItemDetail = ({productos}) =>{

    const [goToCart, setGoToCart] = useState(false)

    const {id} = useParams();
    
    const {imagen, nombre, descripción, precio} = productos;

    const {addItem} = useContext(CartContext);

    function onAdd(cantidad){
        console.log(cantidad)
        console.log(productos)
        addItem(productos, cantidad)
        setGoToCart(true)
    }

    return(
        <section className="itemDetail" id={`item${id}`}>
            <div className='itemContainer'>
                <img className= "imgDetail" src={`/${imagen}`} alt="productos" />
                <h2>{nombre}</h2>
                <p>{descripción}</p>
                <h4>${precio}</h4>
                <DetailCount addItem={onAdd}/>
                {
                    goToCart?<Link to='/cart'className='boton'>Terminar compra</Link>:''

                }
                <span className='cerrar'><Link className='x' to="/">X</Link></span>
            </div>
        </section>)
}

export default ItemDetail