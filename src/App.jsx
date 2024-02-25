import { useEffect, useState } from 'react'
import usePlanificadorGastos from './hooks/usePlanificadorGastos'
import useModal from './hooks/useModal'

import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import Filtros from './components/Filtros'
import ResetearModal from './components/ResetearModal'

import IconNuevoGasto from './img/nuevo-gasto.svg'


function App() {

    // const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

    const { setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, setAnimarModal, setGastoEditar, setGastos } = usePlanificadorGastos()
    const [ modal, setModal ] = useModal()

    const [openModal, setOpenModal]= useState(false)
    const [resetear, setResetear] = useState(false)

    useEffect(() => {
        const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
        
        if (presupuestoLS > 0) setIsValidPresupuesto(true)
    }, [])

    useEffect(() => {
        if (resetear && isValidPresupuesto) {
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
            setResetear(false)
        }
    }, [resetear, isValidPresupuesto])
    
    const handleNuevoGasto = () => {
        setModal(true)
        setGastoEditar({})

        setTimeout(() => {
            setAnimarModal(true)
        }, 500)
    }
    
    return (
        <div className={modal ? 'fijar' : ''}>
            <Header
                setOpenModal={setOpenModal}
            />

            {isValidPresupuesto && (
                <>
                    <main>
                        <Filtros
                            // filtro={filtro}
                            // setFiltro={setFiltro}
                        />
                        <ListadoGastos
                            // gastos={gastos}
                            // setGastoEditar={setGastoEditar}
                            // eliminarGasto={eliminarGasto}
                            // filtro={filtro}
                            // gastosFiltrados={gastosFiltrados}
                        />

                    </main>
                    <div className="nuevo-gasto">
                        <img
                            src={IconNuevoGasto}
                            alt="Icono nuevo gasto"
                            onClick={handleNuevoGasto}
                        />
                    </div>

                    {openModal && <ResetearModal setResetear={setResetear} setOpenModal={setOpenModal} />} 
                </>
            )}

            {modal && (
                <Modal
                    setModal={setModal}
                    // animarModal={animarModal}
                    // setAnimarModal={setAnimarModal}
                    // guardarGasto={guardarGasto}
                    // gastoEditar={gastoEditar}
                    // setGastoEditar={setGastoEditar}
                />
            )}
        </div>
    )
}

export default App
