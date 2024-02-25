import PropTypes from 'prop-types'

import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from './ControlPresupuesto'
import usePlanificadorGastos from '../hooks/usePlanificadorGastos'

const Header = ({
    setOpenModal
}) => {

    const {isValidPresupuesto} = usePlanificadorGastos()

    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValidPresupuesto ? (
                <ControlPresupuesto
                    setOpenModal={setOpenModal}
                />
            ) : (
                <NuevoPresupuesto />
            )}
        </header >
    )
}

Header.propTypes = {
    setOpenModal: PropTypes.func
}

export default Header