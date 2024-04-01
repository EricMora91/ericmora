import "./Item.css"
import {Link} from 'react-router-dom'

const Item = ({producto}) =>{
    const {id, imagen, nombre, precio} = producto

    return(
            <div className="item" id={`item${id}`}>
                <Link to={`/itemId/${id}`}>
                    <img className= "imgItem" src={`/${imagen}`} alt="productos"/>
                    <h2 className="itemStyle">{nombre}</h2>
                    <h4 className="itemStyle">${precio}</h4>
                </Link>
            </div>
    )
}

export default Item