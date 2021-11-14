import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar.jsx'
import ItemListContainer from './Container/ItemListContainer';

function App() {
  return (
      <div className='App'>
        <NavBar />
        <br/><br/>
        <ItemListContainer nombreApp="Tienda Vapor"/>
      </div>
  );
}

export default App;