import React from 'react'

import Item from './Item'

const ItemList = (props) => {
    return (
        <>
            <h1>{props.titulo}</h1>
            {props.lista.map((item, index) => {
                return (
                    <Item key={index} item={item} />
                )
            })}
        </>
    )
}

export default ItemList