import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import {getFirestore, collection, addDoc, serverTimestamp} from 'firebase/firestore'


import './Checkout.css'

function Checkout() {

    const {cart, precioTotal} =useContext(CartContext)

    const [valores, setValores] = useState({
        nombre: '',
        email: '',
        teléfono: ''
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(valores)
    }

    const handleValores = (e) =>{
        setValores({
            ...valores, [e.target.name] : e.target.value
        })
    }

    const orden = {
        buyer: valores,
        items: cart.map(producto => ({id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: producto.cantidad, subtotal: producto.precio* producto.cantidad})),
        total: precioTotal(),
        fecha: serverTimestamp()
    }

    console.log(orden)

    const handleClick = () =>{
        const db = getFirestore()
        const ordersCollection = collection(db, 'órdenes')
        addDoc(ordersCollection, orden)
        .then(({id})=> alert(`Se ha generado su orden con orden de compra ${id}`))
    }

    return (
        <div className='checkout'>
            <Form className='formulario' onSubmit={handleSubmit}>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' value={valores.email} onChange={handleValores}  type="email" placeholder="Ingresa tu email" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name='nombre' valores={valores.nombre} onChange={handleValores}  placeholder="Ingresa tu nombre" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control name='teléfono' value={valores.teléfono} onChange={handleValores} type="phone" placeholder="Ingresa tu teléfono" />
                </Form.Group>
                
                <Button onClick={handleClick} className='comprar' variant="warning" type="submit">
                        Hacer pedido
                </Button>
            </Form>
        </div>
    );
}

export default Checkout