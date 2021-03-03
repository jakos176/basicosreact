import React from 'react';
import Producto from "./Producto";

const Productos = (props) => {
    return (
        <div>
            <h2>Listado de productos</h2>
            {Object.keys(props.productos).map(key => (
                <Producto producto = {props.productos[key]}/>
            ))}
        </div>
    );
}

export default Productos;