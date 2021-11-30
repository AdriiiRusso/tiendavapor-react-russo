import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../Components/NavBar.jsx'
import ItemListContainer from '../Container/ItemListContainer'
import HelloWorld from '../Components/HelloWorld.jsx'
import { Productos } from '../Backend/getProductos.js'

function Home() {
  return (
      <div className='Center'>
        <NavBar />
        <br />
        <HelloWorld nombreApp='Tienda Vapor' />
        <ItemListContainer productos={Productos}/>
      </div>
  );
}

export default Home;