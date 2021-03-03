import React, {Component} from 'react';
import Productos from "./Productos";
import Header from "./Header";
import Footer from "./Footer";

//Primera componente creado en React
class Aplicacion extends Component {

    render() {
        const
            productos = [
                {nombre: 'Libro', precio: 200},
                {nombre: 'Disco de musica', precio: 100},
                {nombre: 'Reproductor de Musica', precio: 50}
                ];

        return (
            <div>
                <Header titulo="Nuestra tienda Virtual"/>
                <Productos productos={productos}/>
                <Footer/>
            </div>);
    }
}

export default Aplicacion;