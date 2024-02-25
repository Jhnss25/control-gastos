import { useEffect, useState } from 'react'
import usePlanificadorGastos from './hooks/usePlanificadorGastos'

import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import Filtros from './components/Filtros'
import ResetearModal from './components/ResetearModal'

import IconNuevoGasto from './img/nuevo-gasto.svg'


function App() {

    const [openModal, setOpenModal]= useState(false)
    const [resetear, setResetear] = useState(false)

    const {
        setPresupuesto,
        isValidPresupuesto,
        setIsValidPresupuesto, 
        setAnimarModal, 
        setGastoEditar, 
        setGastos, 
        modal, 
        setModal
    } = usePlanificadorGastos()


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
                        <Filtros />
                        <ListadoGastos />
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
                />
            )}
        </div>
    )
}

export default App
