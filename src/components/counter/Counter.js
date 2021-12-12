import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../context/CartContext';

export default function Counter({id, stock, cantidad, setCantidad, agregar}){
    const {cart} = useCarritoContext()

    const restCantidad = () => {
        cantidad > 1 && setCantidad(cantidad - 1)        
    }
    const sumCantidad = () => {
        stock > cantidad && setCantidad(cantidad + 1)
    }

    return (
        <>
            <div className="w-50 m-auto">
                {cart.isInCarrito(id) ?
                    <>
                        <Link to={'/'} className="btn btn-dark">Continuar Compra</Link>
                        <br/><br/>
                        <Link to={'/carrito'} className="btn btn-secondary">Terminar Compra</Link>
                    </>
                    :
                    <>
                        <div>
                            <button className="btn btn-dark" onClick={restCantidad}>-</button>
                            <span className="mx-3">{cantidad}</span>
                            <button className="btn btn-dark" onClick={sumCantidad}>+</button>
                        </div>
                        <br/>
                        <button className="btn btn-dark m-2" onClick={agregar}>Agregar al Carrito</button>
                    </>
                }
            </div>
        </>
    )
}