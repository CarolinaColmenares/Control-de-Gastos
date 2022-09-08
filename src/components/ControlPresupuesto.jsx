import { useState, useEffect } from 'react'

const ControlPresupuesto = ({ gastos, presupuesto }) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);

        const totalDisponible = presupuesto - totalGastado;

        setDisponible(totalDisponible)
        setGastado(totalGastado)
    }, [gastos])

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
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
                    <spam>Disponible</spam> {formatearCantidad(disponible)}
                </p>

                <p>
                    <spam>Gastado</spam> {formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto