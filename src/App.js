import './App.css';
import NavBar from './components/navBar/NavBar.jsx';
import Footer from './components/footer/Footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { CartContext } from './components/context/CartContext'
import { UserContext } from './components/context/UserContext'
import AboutUs from './components/aboutUs/AboutUs';
import Cart from './components/cart/cart';


function App() {
  return (
    <div className="App">
      <UserContext>
      <CartContext>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer titulo="¡Bienvenidos a Tienda Vapor!"/>
            </Route>
            <Route exact path="/categoria/:cat">
              <ItemListContainer/>
            </Route>
            <Route exact path="/producto/:productoId">
              <ItemDetailContainer/>
            </Route>
            <Route path="/carrito">
              <Cart value="Hola"/>
            </Route>
            <Route path="/about">
              <AboutUs/>
            </Route>
            <Route path="*">
              <Redirect to="/"/>
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </CartContext>
      </UserContext>
    </div>
  );
}

export default App;
