import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PlanificadorGastosProvider } from './context/PlanificadorGastosProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlanificadorGastosProvider>
      <App />
    </PlanificadorGastosProvider>
  </React.StrictMode>,
)
