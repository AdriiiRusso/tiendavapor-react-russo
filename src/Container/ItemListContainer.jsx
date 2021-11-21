import React, { Component } from 'react'

import ItemList from '../Container/ItemList'

const Saludo = (props) => {
    return (
        <>
            <h1>Bienvenido a "{props.nombreApp}"</h1>
            <ItemList />
        </>
    );
}

export default Saludo