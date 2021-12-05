import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar.jsx'
import AboutUs from './Components/AboutUs.jsx'
import ItemListContainer from './Container/ItemListContainer'
import ItemDetailContainer from './Container/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer titulo='¡Bienvenido a Tienda Vapor!'/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/categorias/:parametroCategoria" element={<ItemListContainer titulo='Atomizadores'/>} />
        <Route path="/categorias/:parametroCategoria" element={<ItemListContainer titulo='Mods Electrónicos'/>} />
        <Route path="/categorias/:parametroCategoria" element={<ItemListContainer titulo='Accesorios'/>} />
        <Route path="/Detalle/:parametroProducto" element={<ItemDetailContainer />} />
      </Routes>  
    </BrowserRouter>
  )
}

export default App