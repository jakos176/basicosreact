import React, {Component} from 'react';
import Productos from "./Producto";
import Header from "./Header";
import Footer from "./Footer";

//Primera componente creado en React
class Aplicacion extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Productos/>
                <Footer/>
            </div>);
    }
}

export default Aplicacion;