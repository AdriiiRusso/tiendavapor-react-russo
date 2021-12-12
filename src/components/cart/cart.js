import React, {useState} from 'react';
import { useCarritoContext } from '../context/CartContext';
import CartItem from '../cartItem/CartItem';
import { Link } from 'react-router-dom';
import CheckOut from '../checkout/Checkout';

export default function Cart(value){
    const {cart, carrito} = useCarritoContext()
    const [checkOut, setCheckOut] = useState(false)
    
    return (   
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-6">
                {
                    !cart.isEmpty() ? 
                    <>
                        {carrito.map( item => <CartItem key={item.id} item={item}/>)}
                        <button className="btn btn-dark w-100" onClick={ () => setCheckOut(!checkOut)}>Finalizar Compra</button>
                    </>
                    :
                    <>
                        <h3>El carrito se encuentra vacio</h3>
                        <p>¡Agregá productos desde las distintas secciones o bien desde la página principal!</p>
                        <Link to="/" className="btn btn-dark">Ir a la página principal</Link>
                    </>
                }
                </div>
            </div>
            <CheckOut checkOut={checkOut} setCheckOut={setCheckOut}/>
        </div>
    )
}