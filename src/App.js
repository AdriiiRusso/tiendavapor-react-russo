import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar.jsx'
import AboutUs from './Components/AboutUs.jsx'
import ItemListContainer from './Container/ItemListContainer'
import ItemDetailContainer from './Container/ItemDetailContainer'
import Cart from './Components/Cart.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartContextProvider from './Context/CartContext.jsx'


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer titulo='¡Bienvenido a Tienda Vapor!'/>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/categorias/:parametroCategoria" element={<ItemListContainer titulo='Atomizadores'/>} />
          <Route path="/categorias/:parametroCategoria" element={<ItemListContainer titulo='Mods Electrónicos'/>} />
          <Route path="/categorias/:parametroCategoria" element={<ItemListContainer titulo='Accesorios'/>} />
          <Route path="/Detalle/:parametroId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>  
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App