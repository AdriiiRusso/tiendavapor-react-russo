import React from 'react';
import { useEffect, useState } from 'react'
import { Productos } from '../Backend/getProductos.js';
import { useParams } from 'react-router-dom';

import ItemList from '../Components/ItemList.jsx'

const ItemListContainer = (props) =>{
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { parametroCategoria } = useParams();
   
    useEffect(() => {
        const promesa = new Promise ((aceptada, rechazada) => {
            setTimeout(()=> {
                // Todo OK:
                aceptada(Productos)
                // Todo MAL:
                // rechazada('Productos no encontrados')
            }, 2000)
        })
        promesa.then((Productos) => {
            if(!parametroCategoria) {
                setProductos(Productos)
            }
            else {
                setProductos(Productos.filter(producto => producto.categoria === parametroCategoria))
            }
        })
        .catch((error)=>{
            console.log('ERROR: ' + error);
        })
        .finally( () => {
            setLoading(false)
        })
    }, [parametroCategoria])

    return(
        <div className='Center'>
            <br />
            <h1>{props.titulo}</h1>
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
        </div>
    )
};

export default ItemListContainer