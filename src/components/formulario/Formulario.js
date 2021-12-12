import React, {useState, useEffect} from 'react';

export default function Formulario ({handleForm, handleSubmit}) {
    const [envio, setEnvio] = useState("Retiro en sucursal")

    useEffect(() => {
        handleForm("", "entrega", envio)
    }, [envio])

    const handleSelect = e => setEnvio(e.target.value)

    return ( 
        <form id="form-checkout">
            <div className="row">
                <div className="form-group col">
                    <label>Email</label>
                    <input name="email" onChange={handleForm} type="email" className="form-control" placeholder="Ingresar email para posibles contactos..."/>
                </div>
            </div>
            <div className="form-group col">
                    <label>Nombre y apellido</label>
                    <input name="nombre" onChange={handleForm} type="text" className="form-control" placeholder="Ingresar nombre de quien recibe..."/>
                </div>
            <div className="form-group">
                <label>Direccion</label>
                <input name="direccion" onChange={handleForm} type="text" className="form-control" placeholder="Ingresar dirección de recepción..."/>
            </div>
            <div className="row mb-3">
                <div className="form-group col">
                    <label>Tipo de entrega</label>
                    <select onChange={handleSelect} name="entrega" className="form-select">
                        <option value="Correo">Correo</option>
                        <option value="Moto">Moto</option>
                        <option defaultValue value="Retiro en sucursal">Retiro en sucursal</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <button name="terminar" className="btn btn-dark form-group col" onClick={handleSubmit}>Terminar</button>
                <button name="cancelar" className="btn btn-secondary form-group col" style={{marginLeft: 10}}  onClick={handleSubmit}>Cancelar</button>
            </div>
        </form>
    )
}