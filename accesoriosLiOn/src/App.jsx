import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route excat path='/' element= {<ItemListContainer/>}/>
        <Route exact path='/categoría/:categoryId' element={<ItemListContainer/>}/>
        <Route exact path="/itemId/:itemId" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>

  );
}
export default App
