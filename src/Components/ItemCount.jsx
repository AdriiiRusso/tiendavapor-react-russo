import {useState} from "react";

export default function ItemCount(props) {    
    const [Count, setCount] = useState(0)

    const sumarContador = () => {
        if (Count < props.stock) {
            setCount(Count + 1)
        }
        else {
            alert("Stock insuficiente")
        }
    }

    const restarContador = () => {
        if (Count > 1) {
            setCount(Count - 1)
        }
        else {
            if(window.confirm("¿Desea eliminar el producto del carrito?")) {
                setCount(0)
            }
        }
    }

    const agregarCarrito = () => {
        if (Count >= 1) {
            alert("Producto agregado al carrito")
        }
        else
        {
            alert("Por favor indicar la cantidad de productos a agregar al carrito")
        }
    }
            
    return(
        <div className="card-footer">
            <p>
                <button class='btn btn-primary' style={{marginRight: 20}} onClick={sumarContador}>+</button>
                {Count}
                <button class='btn btn-primary' style={{marginLeft: 20}} onClick={restarContador}>-</button>
                <button class='btn btn-primary' style={{marginLeft: 20}} onClick={agregarCarrito}>Agregar al carrito</button>
            </p>
        </div>
    )
}
