import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import { fire } from '../../Firebase'

export default function ItemDetailContainer(){
    const {productoId} = useParams()
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [producto]);

    useEffect(() => {
        setLoading(true)
        fire.getCollection(setProducto, "productos", {doc: productoId})
    }, [productoId]);

    return (
        <div className="ItemDetailContainer">
            <>{loading ?
                <>
                    <br/><br/><br/><img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' alt="Cargando productos..." /><br/><br/><br/>
                </>
                :
                <>
                    <ItemDetail item={producto}/>
                </>}
            </>
        </div>
    )
}