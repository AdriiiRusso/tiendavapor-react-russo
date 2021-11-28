import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../Components/NavBar.jsx'
import ItemListContainer from '../Container/ItemListContainer'
import HelloWorld from '../Components/HelloWorld.jsx'

function Home() {
  return (
      <div className='Center'>
        <NavBar />
        <br />
        <HelloWorld nombreApp='Tienda Vapor' />
        <ItemListContainer />
      </div>
  );
}

export default Home;