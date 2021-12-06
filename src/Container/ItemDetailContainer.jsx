import React from 'react';
import { useEffect, useState } from 'react'
import Productos from '../Backend/getProductos.js'
import { useParams } from 'react-router-dom'

import ItemDetail from '../Components/ItemDetail.jsx'

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const { parametroId } = useParams();
   
    useEffect(() => {
        const promesa = new Promise ((aceptada, rechazada) => {
            setTimeout(()=> {
                // Todo OK:
                aceptada(Productos.find(producto => producto.id == parametroId))
                // Todo MAL:
                // rechazada('Productos no encontrados')
            }, 2000)
        })
        promesa.then((ProductoEncontrado) => {
                setProducto(ProductoEncontrado)
            })
            .catch((error)=>{
                console.log('ERROR: ' + error);
            })
            .finally( () => {
                setLoading(false)
            })
    }, [parametroId])

    setTimeout(()=> {
        setLoading(false);
    }, 2000)

    return(
        <div className='Center'>
            <br />
            {
                loading
                    ?
                <>
                    <br /><br /><br />
                    <img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' alt="Cargando productos..." />
                </>
                    :
                <ItemDetail item={producto}/>
            }
            <br />
        </div>
    )
};

export default ItemDetailContainer
