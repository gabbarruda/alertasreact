import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'



import './index.css'
import Alertas from './pages/Alertas'


ReactDOM.createRoot(document.getElementById('root')!).render(
<>
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <MenuLateral/>
    <Routes>   
    <Route path='alertas' element={<Alertas/>}/>
   
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
</>
)
