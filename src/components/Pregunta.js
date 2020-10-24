import React, {Fragment, useState} from 'react';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    // defienr el state
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError] = useState(false); // No hay error al inicio

    // Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validad
        if(cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        // Si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return(
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            
            { error ? <Error mensaje="El presupuesto es Incorrecto" />: null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupeusto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;