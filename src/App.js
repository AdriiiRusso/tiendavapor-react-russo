import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Atos from './Pages/Atos.jsx';
import Mods from './Pages/Mods.jsx';
import Accesorios from './Pages/Accesorios.jsx';
import Detalle from './Pages/Detalle.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Atos" element={<Atos />} />
        <Route path="/Mods" element={<Mods />} />
        <Route path="/Accesorios" element={<Accesorios />} />
        <Route path="/Detalle" element={<Detalle />} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;