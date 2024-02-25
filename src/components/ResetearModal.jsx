import PropTypes from 'prop-types'

const ResetearModal = ({setResetear, setOpenModal}) => {

    return (
        <div className="modal modal-reset">
            <div className="sombra resetear-modal">
                <h2>¿Resetear app?</h2>

                <p>Esta seguro de eliminar su Presupuesto. </p>

                <div className="botones-modal">
                    <button
                        type="button"
                        onClick={() => {
                            setResetear(false)
                            setOpenModal(false)
                        }}
                        >Cancelar</button>
                    <button
                        type="button"
                        onClick={() => {
                            setResetear(true)
                            setOpenModal(false)
                        }}
                    >Eliminar</button>
                </div>
            </div>
        </div>
    )
}

ResetearModal.propTypes = {
    setResetear: PropTypes.func.isRequired,
    setOpenModal: PropTypes.func.isRequired
}

export default ResetearModal