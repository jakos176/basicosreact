import React, {Component} from 'react';
import Header from "./Header";

//Primera componente creado en React
class PrimerComponente extends Component {
    render() {
        return (
            <div>
                <Header/>
                <p>Desde mi primer componente</p>
            </div>);

    }
}

export default PrimerComponente;