import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
    return (
        React.createElement('h1',
            {id: 'titulo', className: 'encabezado'},
            'Hola Mundo'
        )
    );
}

export default App;
