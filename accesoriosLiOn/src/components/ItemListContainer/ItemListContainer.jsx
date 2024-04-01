import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'
import {useState, useEffect} from 'react'
import FadeLoader from "react-spinners/FadeLoader";
import ItemList from '../ItemList/ItemList';


const ItemListContainer = () =>{

    const {categoryId} = useParams();

    const [productos, setProductos] = useState([]);
    
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        setLoading(true)
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if(categoryId){
            const queryFilter = query(queryCollection, where('categoría', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setProductos(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
                .finally(setTimeout(()=> {setLoading(false)}, 2000))
        } else{
            getDocs(queryCollection)
                .then(res => setProductos(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
                .finally(setTimeout(()=> {setLoading(false)}, 2000))
        }
    }, [categoryId]);

    return(
        <main>
            <section className="itemListContainer">
            {
            loading? <FadeLoader
            className='spinner'
            color={'goldenrod'}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />:
            <ItemList productos={productos}/>
            }
            </section>
        </main>
    )
}

export default ItemListContainer