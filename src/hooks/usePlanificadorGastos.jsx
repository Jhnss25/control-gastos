import { useContext } from "react"
import GastosContext from "../context/PlanificadorGastosProvider"

const usePlanificadorGastos = () => {
    return useContext(GastosContext)
}

export default usePlanificadorGastos