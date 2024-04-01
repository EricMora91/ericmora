import {useParams } from 'react-router-dom';
import {getFirestore, doc, getDoc} from 'firebase/firestore'
import {useState, useEffect} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import FadeLoader from "react-spinners/FadeLoader";
import './ItemDetailContainer.css'
    
    const ItemDetailContainer = () =>{
    
        const {id} = useParams();
    
        const [productos, setProductos] = useState([]);
        
        const [loading, setLoading] = useState(true);
    
        useEffect(()=> {
            setLoading(true)
            const querydb = getFirestore();
            const queryDoc = doc(querydb, 'productos', id);
            getDoc(queryDoc)
                .then(res => setProductos({id: res.id, ...res.data()}))
                .finally(setTimeout(()=> {setLoading(false)}, 2000))
        }, [id]);
    
        return(
            <main> 
                <section className="itemDetailContainer">
                {
                loading? 
                <FadeLoader
                    className='spinner'
                    color={'goldenrod'}
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />:
                <ItemDetail productos={productos}/>
                }
                </section>
            </main>
        )
    }

export default ItemDetailContainer