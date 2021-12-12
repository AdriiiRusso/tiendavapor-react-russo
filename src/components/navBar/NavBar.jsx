import React, { useState, useEffect } from 'react';
import './NavBar.css';
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { fire } from '../../Firebase.js';

export default function NavBar(){
    const [categoria, setCategoria] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [categoria]);

    useEffect(() => {
        setLoading(true)
        fire.getCollection(setCategoria, "categorias")
    }, []);

    return (
        <div className="menu-nav">
            <div className="logo">
                <Link to={'/'}><img src="../assets/logo.png" alt="Tienda Vapor"/></Link>
            </div>
            <div className="menu">
                <Link key="Principal" className="menu-item" to="/">
                    Principal
                </Link>
                {!loading ?
                categoria.map(cat => <Link key={cat.name} className="menu-item" to={`/categoria/${cat.name}`}>{cat.name}</Link>) 
                :
                ""}
                <Link key="Acerca de nosotros" className="menu-item" to="/about">
                    Acerca de nosotros
                </Link>
                <Link className="menu-item" to={'/carrito'}>
                    <CartWidget/>
                </Link>
            </div>
        </div>
    )
}