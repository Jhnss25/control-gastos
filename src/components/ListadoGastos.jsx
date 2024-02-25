import Gasto from './Gasto'
import usePlanificadorGastos from '../hooks/usePlanificadorGastos'

const ListadoGastos = () => {

    const { gastos, filtro, gastosFiltrados } = usePlanificadorGastos()

    return (
        <div className="listado-gastos contenedor">
            
            {filtro ? (
                <>
                    <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos en esta Categoría'}</h2>

                    {gastosFiltrados.map(gasto => (
                        <Gasto
                            gasto={gasto}
                            key={gasto.id}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>

                    {gastos.map(gasto => (
                        <Gasto
                            gasto={gasto}
                            key={gasto.id}
                        /> 
                    ))}
                </>
            )}
        </div>
    )
}

export default ListadoGastos