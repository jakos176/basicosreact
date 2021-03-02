import React from 'react';
import './App.css';

//Sin JSX, el react puede llegar a ser muy confuso.
function App() {
    return (
        React.createElement(
            'div',
            null,
            React.createElement('input', {type: 'text', value: 'Value para el input'})
        )
    );
}

export default App;
