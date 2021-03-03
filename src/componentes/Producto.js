import React, {Component} from 'react';

class Producto extends Component {
    render() {
        return (
            <div>
                <p> El {this.props.producto.nombre} tiene un precio de {this.props.producto.precio}</p>
            </div>
        );
    }
}

export default Producto;