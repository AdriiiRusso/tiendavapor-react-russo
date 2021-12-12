import React, {useEffect, useState} from 'react';
import { useUserContext } from '../context/UserContext';
import { useCarritoContext } from '../context/CartContext';
import Modalito from '../modal/Modal';
import Formulario from '../formulario/Formulario'

export default function CheckOut({checkOut, setCheckOut}){
    const {cart} = useCarritoContext()
    const {showModal, setshowModal} = useUserContext()
    const [formData, setFormData] = useState({
        nombre: '',
        email:'',
        direccion:'',
        entrega: ''
    })

    useEffect(() => {
        setshowModal(checkOut)
    }, [checkOut]);

    useEffect(() => {
        setCheckOut(showModal)
    }, [showModal]);

    const handleForm = (e, name=e.target.name, value=e.target.value) => {
        setFormData({...formData, [name]: value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(e.target.name === "terminar"){
            cart.generarOrden(formData)
        }
        else{
            setshowModal(false)
        }
    }

    const finalizarCompra = () => {
        cart.clearCarrito()
        setshowModal(false)
    }

    return (
        <Modalito titulo={!cart.numeroOrden ? "Finalizar compra" : "Compra finalizada"}>
            {
                !cart.numeroOrden ?
                <Formulario handleForm={handleForm} handleSubmit={handleSubmit}/>
                : 
                <>
                    <h3>Su numero de orden es:</h3>
                    <p>{cart.numeroOrden}</p>
                    <button className="btn btn-dark w-100" onClick={finalizarCompra}>Cerrar</button>
                </>
            }
        </Modalito>
    )
}