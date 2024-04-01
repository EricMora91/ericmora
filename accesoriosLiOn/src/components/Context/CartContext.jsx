import { createContext, useState} from "react";

export const CartContext = createContext([]);

export function CartProvider({children}){

    const [cart, setCart] = useState([])

    const  addItem = (item, cantidad) => {
        if(isInCart(item)){
            setCart(cart.map(product =>{
                    if(product.id === item.id) {
                        return {...product, cantidad: product.cantidad + cantidad}}
                        else{return product}
                }))
            } else {
            setCart([...cart, {...item, cantidad}])
        }
    }
    
    console.log(cart)

    const isInCart = (item) => cart.find(product => product.id === item.id)? true : false

    function clear() {
        setCart([])
    }

    function removeItem(id) {
        setCart(cart.filter(product => product.id !==id))
    }

    const precioTotal = () =>{ return cart.reduce((acumulador, valorActual) => acumulador + valorActual.cantidad*valorActual.precio, 0)}

    console.log(cart)
    const productoTotal = () => { return cart.reduce((acumulador, valorActual) => acumulador + valorActual.cantidad, 0)}

    return(
        <CartContext.Provider value={{cart, setCart, isInCart, addItem, clear, removeItem, precioTotal, productoTotal}}>{children}</CartContext.Provider>
    )
}
