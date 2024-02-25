import PropTypes from 'prop-types'
import Gasto from './Gasto'
import usePlanificadorGastos from '../hooks/usePlanificadorGastos'

const ListadoGastos = ({
    // gastos,
    setGastoEditar,
    eliminarGasto,
    // filtro,
    // gastosFiltrados
}) => {

    const { gastos, filtro, gastosFiltrados } = usePlanificadorGastos()

    return (
        <div className="listado-gastos contenedor">
            
            {filtro ? (
                <>
                    <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos en esta Categoría'}</h2>

                    {gastosFiltrados.map(gasto => (
                        <Gasto
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            key={gasto.id}
                            eliminarGasto={eliminarGasto}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>

                    {gastos.map(gasto => (
                        <Gasto
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            key={gasto.id}
                            eliminarGasto={eliminarGasto}
                        /> 
                    ))}
                </>
            )}
        </div>
    )
}

ListadoGastos.propTypes = {
    // gastos: PropTypes.array.isRequired,
    setGastoEditar: PropTypes.func.isRequired,
    eliminarGasto: PropTypes.func,
    filtro: PropTypes.string,
    gastosFiltrados: PropTypes.array,
}

export default ListadoGastos