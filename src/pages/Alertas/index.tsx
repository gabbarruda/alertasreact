import "../../pages/Alertas/style.css"
import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
//import { useState } from "react";




function Alertas() {
  useEffect(() => {
    const handleKeyUp = () => {
      const expressao = inputBusca.value.toLowerCase();

      if (expressao.length === 1) {
        return;
      }

      const linhas = tabelaAlertas.getElementsByTagName('tr');

      for (let posicao in linhas) {
        if (isNaN(posicao)) {
          continue;
        }

        const conteudoDaLinha = linhas[posicao].innerHTML.toLowerCase();

        if (conteudoDaLinha.includes(expressao)) {
          setLinhasVisiveis((prev) => ({ ...prev, [posicao]: true }));
        } else {
          setLinhasVisiveis((prev) => ({ ...prev, [posicao]: false }));
        }
      }
    };

    const [linhasVisiveis, setLinhasVisiveis] = useState({});
    const inputBusca = document.getElementById('input-busca');
    const tabelaAlertas = document.getElementById('tabela-alertas');

    inputBusca.addEventListener('keyup', handleKeyUp);

    // Remover o evento quando o componente for desmontado
    return () => {
      inputBusca.removeEventListener('keyup', handleKeyUp);
    };
  }, []); // Executa apenas uma vez ao montar o componente

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
       
   <div className="card card-body mt-5">
   
    <h1>Gerenciamento de Alertas</h1>

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
      
      <tr style={{ display: linhasVisiveis[0] ? '' : 'none' }}>
        <td>Urgente</td>
        <td>1</td>
        <td>12/05/2023</td>
        <td>Erro na planta taubate</td>
        <td>K8LL-TGB</td>
        <td>K8LL-TGB</td>
       
      </tr>
      <tr style={{ display: linhasVisiveis[1] ? '' : 'none' }}>
        <td>Normais</td>
        <td>2</td>
        <td>12/05/2023</td>
        <td>Erro na planta taubate</td>
        <td>K8LL-TGB</td>
        <td>K8LL-TGB</td>
 
      </tr>
      <tr style={{ display: linhasVisiveis[2] ? '' : 'none' }}>
        <td>Críticos</td>
        <td>3</td>
        <td>12/05/2023</td>
        <td>Erro na planta taubate</td>
        <td>K8LL-TGB</td>
        <td>K8LL-TGB</td>
 
      </tr>
      <tr style={{ display: linhasVisiveis[3] ? '' : 'none' }}>
        <td>Urgente</td>
        <td>4</td>
        <td>12/05/2023</td>
        <td>Erro na planta taubate</td>
        <td>K8LL-TGB</td>
        <td>K8LL-TGB</td>
 
      </tr>
      <tr style={{ display: linhasVisiveis[4] ? '' : 'none' }}>
        <td>Urgente</td>
        <td>1</td>
        <td>12/05/2023</td>
        <td>Erro na planta taubate</td>
        <td>K8LL-TGB</td>
        <td>K8LL-TGB</td>
      </tr>
    </tbody>
  </table>
  </div>



     
      </section>
</>
  )
}




export default Alertas;