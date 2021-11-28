import { Outlet, Link } from 'react-router-dom';

import ItemCount from './ItemCount';

const Item = (productos) => {
    return (
        <>
            <br />
            <div class="container">
                <div class="card">
                    <div style={{textAlign : 'center'}}>
                    <img src={productos.item.imagen} class="card-img-top" style={{width: 200, height : 200}} alt="Producto" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{productos.item.nombre}</h5>
                        <p class="card-text">{productos.item.descripcion}</p>
                        <p class="card-text"><small class="text-muted">{productos.item.categoria == 'mods' ? 'Equipo electrónico' : 'Atomizador'}</small></p>
                        <p class="card-text">U$D: {productos.item.precio}</p>
                        <Link to="/Detalle">
                            <button className="btn btn-outline-primary btn-block mr-1">
                                Detalle del producto
                            </button>
                        </Link>
                    </div>
                    <ItemCount stock={productos.item.stock} id={productos.item.id} />
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default Item