import Calendar from "react-calendar";

import "./style.css"
import 'react-calendar/dist/Calendar.css';
// import Login from './pages/Login'
// import Home from './pages/Home'

// import Grafico from "../../assets/img/grafico-painel.png"
import Resultado from "../../assets/img/demonstrativo.png"
import Painel from "../../assets/img/grafico-painel.png"

import { useState } from "react";


function Alertas() {



  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];

    const [value, onChange] = useState<Value>(new Date());
  
    
    
  return (
    <>
      <section className="mainCards">
        <div className="cards">
          <div className="card critico">
            <div className="card-conten">
              <div className="number">50</div>
              <div className="card-name">Alertas criticos</div>
            </div>
            <div className="icon-box">
              <i className="fas fa-user-graduate" />
            </div>
          </div>
          <div className="card urgentes">
            <div className="card-conten">
              <div className="number">30</div>
              <div className="card-name">Urgentes</div>
            </div>
            <div className="icon-box">
              <i className="fas fa-chalkboard-teacher" />
            </div>
          </div>
          <div className="card normais">
            <div className="card-conten">
              <div className="number">20</div>
              <div className="card-name">Normais</div>
            </div>
            <div className="icon-box">
              <i className="fas fa-users" />
            </div>
          </div>
          <div className="card concluido">
            <div className="card-conten">
              <div className="number">20</div>
              <div className="card-name">Concluído</div>
            </div>
            <div className="icon-box">
              <i className="fas fa-users" />
            </div>
          </div>
        </div>
        <div className="grafico">
          <img src={ Resultado } alt="btn-user-info" />
          <img src={ Painel } alt="btn-user-info" />

        </div>
        <div className="testecalendario">
        <Calendar onChange={onChange} value={value} />
        
      </div>
      </section>
    </>


  )
}

export default Alertas
