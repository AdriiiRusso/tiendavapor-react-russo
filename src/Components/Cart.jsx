import { useCartContext } from "../Context/CartContext.jsx"

function Cart() {
    const {cartList, varciarCarrtio} = useCartContext()

    return (
        <div style={{textAlign: "center"}}>
            <h1>Carrito de compras</h1>
            { cartList.map(prod => <li key={prod.id}> {prod.nombre} {prod.cantidad}</li>) }
            <button class='btn btn-primary' onClick={()=> varciarCarrtio()}>Vaciar carrito</button>
            <br /> <br />
            <button class='btn btn-primary'>Realizar compra</button>
        </div>
    )
}

export default Cart