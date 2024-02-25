
import {useState} from 'react'

const useModal = () => {
    const [modal, setModal] = useState(false)
//     const {gastos} = usePlanificadorGastos

//     const guardarGasto = gasto => {
//             if (gasto.id) {
//                 // Actualizar
//                 const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
    
//                 setGastos(gastosActualizados)
//                 setGastoEditar({})
//             } else {
//                 // Nuevo Gasto
//                 gasto.id = generarId()
//                 gasto.fecha = Date.now()
//                 setGastos([...gastos, gasto])
//             }
    
//             setTimeout(() => {
//                 setModal(false)
//             }, 500)
    
//             setAnimarModal(false)
//     }

    return [modal, setModal]
}

export default useModal