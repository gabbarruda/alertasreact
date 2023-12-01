import "../../pages/Alertas/style.css"

//import '~bootstrap/dist/css/bootstrap.css';   
import 'bootstrap/dist/css/bootstrap.min.css';

//import { useState } from "react";

function Alertas() {

  
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
        <th>#ID</th>
        <th>Alertas criticos</th>
        <th>Urgentes</th>
        <th>Normais</th>
        <th>Concluído</th>
      </tr>
    </thead>
    <tbody id="tabela-bebidas">
      <tr>
        <td>1</td>
        <td>Ypióca</td>
        <td>Prata, 960ml</td>
        <td>4</td>
        <td>
          <button className="btn btn-sm btn-warning">Editar</button>
        
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Heineken</td>
        <td>Long neck, 355ml</td>
        <td>72</td>
        <td>
          <button className="btn btn-sm btn-warning">Editar</button>

        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Catuaba Selvagem</td>
        <td>750ml</td>
        <td>12</td>
        <td>
          <button className="btn btn-sm btn-warning">Editar</button>
  
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>Jurubeba do muído</td>
        <td>Garrafa, 960ml</td>
        <td>10</td>
        <td>
          <button className="btn btn-sm btn-warning">Editar</button>
     
        </td>
      </tr>
      <tr>
        <td>5</td>
        <td>"Vinho" São Braz</td>
        <td>900ml</td>
        <td>20</td>
        <td>
          <button className="btn btn-sm btn-warning">Editar</button>
      
        </td>
      </tr>
      <tr>
        <td>6</td>
        <td>Run Montilla</td>
        <td>Carta branca, 1L</td>
        <td>6</td>
        <td>
          <button className="btn btn-sm btn-warning">Editar</button>
      
        </td>
      </tr>
      <tr>
        <td>7</td>
        <td>Cerveja Kaiser</td>
        <td>lata, 355ml</td>
        <td>32</td>
        <td>
          <button className="btn btn-sm btn-warning">Editar</button>
    
        </td>
      </tr>
      <tr>
        <td>8</td>
        <td>Cachaça caranguejo</td>
        <td>garrafinha, 400ml</td>
        <td>10</td>
        <td>
          <button className="btn btn-sm btn-warning">Editar</button>
        
        </td>
      </tr>
      <tr>
        <td>9</td>
        <td>Vodka Slova</td>
        <td>garrafa, 960ml</td>
        <td>10</td>
        <td>
          <button className="btn btn-sm btn-warning">Editar</button>
         
        </td>
      </tr>
    </tbody>
  </table>
 
      <script src="historico.js"></script>




       
      </section>
    </>




  )
}


export default Alertas
