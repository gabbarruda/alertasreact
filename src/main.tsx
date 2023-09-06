import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'
import Alertas from './pages/Alertas'



import 'react-calendar/dist/Calendar.css';
import Teste from './pages/Teste'


// import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
<>
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <MenuLateral/>
    <Routes>   
    <Route path='alertas' element={<Alertas/>}/>
    <Route path='teste' element={<Teste/>}/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
</>
)
