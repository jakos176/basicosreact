import React, {Component} from 'react';

class Producto extends Component {
    render() {
        const {nombre, precio} = this.props.producto;
        return (
            <div>
                <p> El {nombre} tiene un precio de {precio}</p>
            </div>
        );
    }
}

export default Producto;