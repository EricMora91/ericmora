import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {CartProvider} from './components/Context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route excat path='/' element= {<ItemListContainer/>}/>
            <Route exact path='/categoría/:categoryId' element={<ItemListContainer/>}/>
            <Route exact path='/itemId/:id' element={<ItemDetailContainer/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
            <Route exact path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
    </CartProvider>
  );
}
export default App
