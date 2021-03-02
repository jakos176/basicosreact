import React from 'react';
import './App.css';

//Con JSX, se debe englobar en una etiqueta general (en este caso es el div)
function App() {
    const empleado = {
        nombre: 'Juan',
        trabajo: 'Desarrollador web'
    };

    return (
        // <React.Fragment>
        <div className='contenedor'>
            <h1 className='mayusculas'>Detalles de: {empleado.nombre} que trabaja en {empleado.trabajo}</h1>
        </div>
        // </React.Fragment>
    );
}

export default App;
