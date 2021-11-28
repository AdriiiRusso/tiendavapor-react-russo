import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../Components/NavBar.jsx'
import ItemDetailContainer from '../Container/ItemDetailContainer'

function Detalle() {
  return (
      <div className='Center'>
        <NavBar />
        <br />
        <ItemDetailContainer />
      </div>
  );
}

export default Detalle;