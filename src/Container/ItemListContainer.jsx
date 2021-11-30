import React from 'react';
import { useEffect, useState } from 'react'

import ItemList from '../Components/ItemList.jsx'

const ItemListContainer = (props) =>{
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        const promesa = new Promise ((aceptada, rechazada) => {
            setTimeout(()=> {
                // Todo OK:
                aceptada(props.productos)
                // Todo MAL:
                // rechazada('Productos no encontrados')
            }, 2000)
        })
        promesa.then((Productos) => {
                setProductos(props.productos)
            })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally( () => {
                setLoading(false)
            })
    }, [])

    return(
        <>
            {
                loading
                    ?
                <>
                <br /><br /><br />
                <img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' alt="Cargando productos..." />
                </>
                    :
                <ItemList lista={productos}/>
            }
        </>
    )
};

export default ItemListContainer