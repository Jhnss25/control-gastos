// import PropTypes from 'prop-types'
import usePlanificadorGastos from '../hooks/usePlanificadorGastos'
// import {useState, useEffect} from 'react'

const Filtros = () => {

    const { filtro, setFiltro} = usePlanificadorGastos()
    
    return (
        <div className="filtros contenedor sombra">
            <form>
                <div className="campo">
                    <label>Filtrar Gastos</label>
                    <select
                        value={filtro}
                        onChange={e => setFiltro(e.target.value)}
                    >
                        <option value="">-- Todas las Categorías --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="educacion">Educación</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

// Filtros.propTypes = {
//     filtro: PropTypes.string.isRequired,
//     setFiltro: PropTypes.func.isRequired,
// }

export default Filtros