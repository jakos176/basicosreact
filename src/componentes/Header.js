import React from 'react';

//Functional component
//Se usan cuando una class component no tiene estado,
// no puede usar ref ni los metodos del ciclo de vida.
const Header = () => {
    return (
        <header>
            <h1>Tienda Virtual</h1>
        </header>
    )
}

export default Header;