import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../Components/NavBar.jsx'
import ItemListContainer from '../Container/ItemListContainer'
import { Productos } from '../Backend/getProductosAtos.js'

function Atos() {
  return (
      <div className='Center'>
        <NavBar />
        <br />
        <h1>Atomizadores</h1>
        <ItemListContainer productos={Productos} />
      </div>
  );
}

export default Atos;