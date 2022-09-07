import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Gráfica aquí</p>
            </div>

            <div className='contenido-presupuesto'>
                <p>
                    <spam>Presupuesto</spam> {formatearCantidad(presupuesto)}
                </p>

                <p>
                    <spam>Disponible</spam> {formatearCantidad(0)}
                </p>

                <p>
                    <spam>Gastado</spam> {formatearCantidad(0)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto