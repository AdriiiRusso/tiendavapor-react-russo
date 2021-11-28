import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../Components/NavBar.jsx'
import ItemListContainer from '../Container/ItemListContainer'

function Accesorios() {
  return (
      <div className='Center'>
        <NavBar />
        <br />
        <h1>Accesorios</h1>
        <ItemListContainer />
      </div>
  );
}

export default Accesorios;