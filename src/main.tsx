import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'




import Alertas from './pages/Alertas'
// import Alerta from './pages/Alerta'


// import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
<>
  <React.StrictMode>
    <BrowserRouter>
    <MenuLateral/>

    <section className='body'>
    <Header/>

    <Routes>   
    <Route path='alertas' element={<Alertas/>}/>


      </Routes>
      </section>
    </BrowserRouter>
  </React.StrictMode>
</>
)
