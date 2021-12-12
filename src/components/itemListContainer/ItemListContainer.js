import React, { useEffect, useState } from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { fire } from '../../Firebase';

export default function ItemListContainer(props){
    const {cat} = useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)        
    }, [productos]);

    useEffect(() => {
        setLoading(true)
        let opt = cat ? {where : ["category", "==", cat]} : {}
        fire.getCollection(setProductos, "productos", opt)
    }, [cat]);

    let titulo = props.titulo

    return(
        <div className="ItemListContainer w-100">
            <>{loading ?
                <>
                    <br/><br/><br/><img src='../assets/loading.gif' alt="Cargando productos..." /><br/><br/><br/>
                </>
                :
                <>
                    <ItemList listado={productos} titulo={titulo}/>
                    <br/><br/><br/>
                </>}
            </>
        </div>
    )
}