import PropTypes from 'prop-types'

import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
    // gastos,
    // setGastos,
    isValidPresupuesto,
    setIsValidPresupuesto,
    setOpenModal
}) => {


    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValidPresupuesto ? (
                <ControlPresupuesto
                    // gastos={gastos}
                    // setIsValidPresupuesto={setIsValidPresupuesto}
                    setOpenModal={setOpenModal}
                />
            ) : (
                <NuevoPresupuesto
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            )}
        </header >
    )
}

Header.propTypes = {
    isValidPresupuesto: PropTypes.bool,
    setIsValidPresupuesto: PropTypes.func,
    // gastos: PropTypes.array,
    // setGastos: PropTypes.func,
    setOpenModal: PropTypes.func
}

export default Header