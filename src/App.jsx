import { useEffect, useState } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import { generarId } from './helpers/index'
import IconNuevoGasto from './img/nuevo-gasto.svg'
import Filtros from './components/Filtros'
import ResetearModal from './components/ResetearModal'

import { PlanificadorGastosProvider } from './context/PlanificadorGastosProvider'
import usePlanificadorGastos from './hooks/usePlanificadorGastos'

function App() {

    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

    const {modal, setModal, setAnimarModal} = usePlanificadorGastos()

    const [openModal, setOpenModal]= useState(false)


    const [resetear, setResetear] = useState(false)

    useEffect(() => {
        const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
        
        if (presupuestoLS > 0) setIsValidPresupuesto(true)
    }, [])

    

    useEffect(() => {
        if (resetear && isValidPresupuesto) {
            // setGastos([])
            setIsValidPresupuesto(false)
            setResetear(false)
        }
    }, [resetear, isValidPresupuesto])
    
    const handleNuevoGasto = () => {
        setModal(true)
        // setGastoEditar({})

        setTimeout(() => {
            setAnimarModal(true)
        }, 500)
    }
    
    
    
    return (
        <PlanificadorGastosProvider>
            <div className={modal ? 'fijar' : ''}>
                <Header
                    // gastos={gastos}
                    // setGastos={setGastos}
                    isValidPresupuesto={isValidPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
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
                        setAnimarModal={setAnimarModal}
                        // guardarGasto={guardarGasto}
                        // gastoEditar={gastoEditar}
                        // setGastoEditar={setGastoEditar}
                    />
                )}
            </div>
        </PlanificadorGastosProvider>
    )
}

export default App
