import Item from "../Item/Item"
import"./ItemList.css"

const ItemList = ({productos}) => {
    return(
        <div className="itemList">
            {productos.map(producto => (
                <Item key={producto.itemId} producto={producto}/>
            ))}
        </div>
    )
}
export default ItemList