import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react'
import productosJSON from "/src/productos.json"
import ItemList from '../ItemList/ItemList';

function asyncMock(categoryId){
    return new Promise((resolve) =>{
        setTimeout(() => {
        if(categoryId == undefined){
            resolve(productosJSON);
        } else {
            const productosFiltrados = productosJSON.filter((item)=> {
                return item.categoría == categoryId
            })
            resolve(productosFiltrados)
        }
        }, 2000);
    });
}

const ItemListContainer = () =>{

    const {categoryId} = useParams();

    const [productos, setProductos] = useState([]);



    useEffect(()=> {
        asyncMock(categoryId).then((res)=> setProductos(res));
    }, [categoryId]);

    return(
        <main>
            <section className="itemListContainer">
                <ItemList productos={productos}/>
            </section>
        </main>
    )
}

export default ItemListContainer