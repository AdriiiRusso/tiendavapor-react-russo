import React, { Component } from 'react'

const Saludo = (props) => {
    return (
        <>
            <div>
                <h1>¡Bienvenidos a {props.nombreApp}!</h1>
            </div>
        </>
    )
}

export default Saludo