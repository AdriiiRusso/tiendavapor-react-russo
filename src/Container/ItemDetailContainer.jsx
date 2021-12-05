import React from 'react';
import { useEffect, useState } from 'react'

import ItemDetail from '../Components/ItemDetail.jsx'

const ItemDetailContainer = () =>{
    // const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
   
    // useEffect(() => {
    //     const promesa = new Promise ((aceptada, rechazada) => {
    //         setTimeout(()=> {
    //             // Todo OK:
    //             aceptada(Productos)
    //             // Todo MAL:
    //             // rechazada('Productos no encontrados')
    //         }, 2000)
    //     })
    //     promesa.then((Productos) => {
    //             setProductos(Productos)
    //         })
    //         .catch((error)=>{
    //             console.log('ERROR');
    //         })
    //         .finally( () => {
    //             setLoading(false)
    //         })
    // }, [])

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
                <ItemDetail />
            }
            <br />
        </div>
    )
};

export default ItemDetailContainer