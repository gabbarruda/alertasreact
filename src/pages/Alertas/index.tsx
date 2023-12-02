import "../../pages/Alertas/style.css"

//import '~bootstrap/dist/css/bootstrap.css';   
import 'bootstrap/dist/css/bootstrap.min.css';

import historico from './historico';
//import { useState } from "react";

function Alertas() {

  
  return (
    <>
      <section className="mainCards">
        <div className="cards">
          <div className="card critico">
            <div className="card-conten">
              <div className="number">50</div>
              <div className="card-name">Críticos</div>
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
              <div className="number">25</div>
              <div className="card-name">Concluído</div>
            </div>
            <div className="icon-box">
              <i className="fas fa-users" />
            </div>
          </div>
        </div>
     
  <h1>Gerenciamento de Alertas</h1>
  <hr />
  <input
    id="input-busca"
    type="text"
    className="form-control mt-3 mb-3"
    placeholder="O que você procura?"
  />
  <table className="table table-hover table-striped">
    <thead className="table-dark">
      <tr>
        <th>Nome Alerta</th>
        <th>Nível criticidade</th>
        <th>Data</th>
        <th>Status</th>
        <th>Descrição alerta</th>
        <th>ID_ERRO</th>
      </tr>
    </thead>
    <tbody id="tabela-alertas">
      <tr>
        <td>Urgente</td>
        <td>1</td>
        <td>12/05/2023</td>
        <td>Erro na planta taubate</td>
        <td>K8LL-TGB</td>
        <td>K8LL-TGB</td>
  
      </tr>
      <tr>
        <td>Normais</td>
        <td>2</td>
        <td>12/05/2023</td>
        <td>Erro na planta taubate</td>
        <td>K8LL-TGB</td>
        <td>K8LL-TGB</td>
  
      </tr>
      <tr>
        <td>Críticos</td>
        <td>3</td>
        <td>12/05/2023</td>
        <td>Erro na planta taubate</td>
        <td>K8LL-TGB</td>
        <td>K8LL-TGB</td>
  
      </tr>
      <tr>
        <td>Urgente</td>
        <td>4</td>
        <td>12/05/2023</td>
        <td>Erro na planta taubate</td>
        <td>K8LL-TGB</td>
        <td>K8LL-TGB</td>
  
      </tr>
 
      <tr>
        <td>Urgente</td>
        <td>1</td>
        <td>12/05/2023</td>
        <td>Erro na planta taubate</td>
        <td>K8LL-TGB</td>
        <td>K8LL-TGB</td>
  
      </tr>
    </tbody>
  </table>

      <script src="historico.js"></script>
      </section>
    </>
  )
}


export default Alertas
