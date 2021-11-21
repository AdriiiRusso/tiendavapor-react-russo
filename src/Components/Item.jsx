import React, { Component, useState, useEffect } from 'react'

import { getProductos } from '../Backend/getProductos';

const Item = (props) => {
    const [products, setProductos] = useState([])
    const [loading, setCarga] = useState(true)

    useEffect( () => {
    getProductos
    .then(data => {
        console.log('Llamado al "Backend"')   
        setProductos(data)     
    })
        .catch(error => {console.log(error)})    
            .finally( () => {setCarga(false)})
}, [])

    return (
        <>
            <br />
            <div class="container">
                { loading ?
                    <img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' alt="Cargando productos..." />
                        :  products.map(prod =>
                                            <div class="card mb-3">
                                                <div style={{textAlign : 'center'}}>
                                                <img src={prod.imagen} class="card-img-top" style={{width: 200, height : 200}} alt="Producto" />
                                                </div>
                                                <div class="card-body">
                                                    <h5 class="card-title">{prod.nombre}</h5>
                                                    <p class="card-text">{prod.descripcion}</p>
                                                    <p class="card-text"><small class="text-muted">{prod.categoria == 'mods' ? 'Equipo electrónico' : 'Atomizador'}</small></p>
                                                    <p class="card-text">U$D: {prod.precio}</p>
                                                </div>
                                                <div className="card-footer">
                                                    <button className="btn btn-outline-primary btn-block">
                                                        Detalle del producto
                                                    </button>
                                                </div>
                                            </div>
                                        )
                }
            </div>
        </>
    );
}

export default Item