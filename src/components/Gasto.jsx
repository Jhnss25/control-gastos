import PropTypes from 'prop-types'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import { formatearFecha } from '../helpers'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

// Para agregar la imagen según su categoría
const diccionarioIconos = {
    ahorro: IconoAhorro,
    casa: IconoCasa,
    comida: IconoComida,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones
}

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {
    
    const {nombre, cantidad, categoria, id, fecha} = gasto


    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction
                onClick={() => setGastoEditar(gasto)}
            >
                Editar
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => eliminarGasto(id)}
                destructive={true}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                // Es la función que se va a ejecutar en la izquierda al arrastrar el elemento a la derecha
                leadingActions={leadingActions()}
                // funciona al lado contrario que leadingActions
                trailingActions={trailingActions()}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        {/* {Imagen} */}
                        <img
                            src={diccionarioIconos[categoria]}
                            alt={`Icono ${categoria}`}
                        />

                        <div className="descripcion-gasto">
                            <p className="categoria">{categoria}</p>
                            <p className="nombre-gasto">{nombre}</p>
                            <p className="fecha-gasto">
                                Agregado el: {''}
                                <span>{formatearFecha(fecha)}</span>
                            </p>
                        </div>
                    </div>

                    <p className="cantidad-gasto">${cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired,
    setGastoEditar: PropTypes.func,
    eliminarGasto: PropTypes.func,
}

export default Gasto