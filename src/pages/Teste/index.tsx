import "./style.css"
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom";



export  function Teste() {
return (
<>
  <div classname="vermelho">
    <span>Alertas críticos</span>
  </div>
  <div classname="amarelo">
    <span>Alertas urgente</span>
  </div>
  <div classname="verde">
    <span>Sugestão do sistema</span>
  </div>
</>

)
}

export default Teste
