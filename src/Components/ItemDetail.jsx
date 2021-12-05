import React from 'react'

import ItemCount from './ItemCount'

const ItemList = (props) => {
    return (
        <>
            <div class="card mb-3" className='Center'>
                <h1>Nombre del producto</h1>
                <img src={props.imagen} style={{width: 400, height : 400}} class="card-img-top" alt="Producto" />
                <div class="card-body">
                    <h5 class="card-title">Detalle del producto</h5>
                    <p class="card-text">Este es el detalle del producto seleccionado</p>
                </div>
                <ItemCount />
            </div>
        </>
    )
}

export default ItemList