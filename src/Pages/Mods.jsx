import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../Components/NavBar.jsx'
import ItemListContainer from '../Container/ItemListContainer'

function Mods() {
  return (
      <div className='Center'>
        <NavBar />
        <br />
        <h1>Mods Electrónicos</h1>
        <ItemListContainer />
      </div>
  );
}

export default Mods;