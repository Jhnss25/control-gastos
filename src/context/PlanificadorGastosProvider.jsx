import { createContext, useEffect, /* useEffect, */ useState } from "react"
import PropTypes from 'prop-types'
import { generarId } from "../helpers"

const PlanificadorGastosContext = createContext()

export const PlanificadorGastosProvider = ({ children }) => {

    const [gastos, setGastos] = useState( JSON.parse(localStorage.getItem('gastos')) || [] )

    const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) || 0)

    const [modal, setModal] = useState(false)
    const [animarModal, setAnimarModal] = useState(false)
    
    const [gastosFiltrados, setGastosFiltrados] = useState([])
    const [filtro, setFiltro] = useState('')
    const [gastoEditar, setGastoEditar] = useState({})

    useEffect(() => {
        localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
    }, [gastos])

    useEffect(() => {
        localStorage.setItem('presupuesto', presupuesto ?? 0)
    }, [presupuesto])

    useEffect(() => {
        if (filtro) {            
            // Filtrar gastos por categoría
            const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
            
            setGastosFiltrados(gastosFiltrados)
        }
    }, [filtro])
    
    const guardarGasto = gasto => {
        if (gasto.id) {
            // Actualizar
            const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)

            setGastos(gastosActualizados)
            setGastoEditar({})
        } else {
            // Nuevo Gasto
            gasto.id = generarId()
            gasto.fecha = Date.now()
            setGastos([...gastos, gasto])
        }

        setTimeout(() => {
            setModal(false)
        }, 500)

        setAnimarModal(false)
    }

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setModal(true)
            setTimeout(() => {
                setAnimarModal(true)
            }, 500)
        }
    }, [gastoEditar])

    const eliminarGasto = id => {        
        const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
        setGastos(gastosActualizados)
    }

    return (
        <PlanificadorGastosContext.Provider
            value={{
                presupuesto,
                gastos,
                gastosFiltrados,
                setPresupuesto,
                setGastos,
                gastoEditar,
                setGastoEditar,
                filtro,
                setFiltro,
                guardarGasto,
                modal,
                setModal,
                animarModal,
                setAnimarModal,
                eliminarGasto
            }}
        >
            {children}
        </PlanificadorGastosContext.Provider>
    )
}

PlanificadorGastosProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default PlanificadorGastosContext