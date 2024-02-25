import PropTypes from 'prop-types'
import { useState } from 'react'
import Mensaje from './Mensaje'

import usePlanificadorGastos from '../hooks/usePlanificadorGastos'

const NuevoPresupuesto = ({
    setIsValidPresupuesto
}) => {

    const [mensaje, setMensaje] = useState('')

    const {presupuesto, setPresupuesto} = usePlanificadorGastos()

    const handlePresupuesto = (e) => {
        e.preventDefault()

        if (!Number(presupuesto) || Number(presupuesto < 0)) return setMensaje('No es un presupuesto válido')
        
        setMensaje('')
        setIsValidPresupuesto(true)
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label>Definir Presupuesto</label>

                    <input
                        className="nuevo-presupuesto"
                        type="number"
                        placeholder="Añade tu Presupuesto"
                        value={presupuesto}
                        onChange={(e) => setPresupuesto(Number(e.target.value))}
                    />
                </div>

                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

NuevoPresupuesto.propTypes = {
    setIsValidPresupuesto: PropTypes.func
}
  
  export default NuevoPresupuesto