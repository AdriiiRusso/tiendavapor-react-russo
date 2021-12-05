import React from 'react'

import ItemCount from './ItemCount'

const ItemList = ({item}) => {
    return (
        <>
            <div class="card mb-3" className='Center'>
                <h1>{item.nombre}</h1>
                <img src={item.imagen} style={{width: 400, height : 400}} class="card-img-top" alt="Producto" />
                <div class="card-body">
                    <h5 class="card-title">{item.descripcion}</h5>
                    <p class="card-text">El precio por unidad es de U$D <strong>{item.precio}</strong></p>
                </div>
                <ItemCount stock={item.stock}/>
            </div>
        </>
    )
}

export default ItemList