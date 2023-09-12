import "./style.css"




export  function Painel() {
return (

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
        <div className="card-name">Alertas urgentes</div>
      </div>
      <div className="icon-box">
        <i className="fas fa-chalkboard-teacher" />
      </div>
    </div>
    <div className="card normais">
      <div className="card-conten">
        <div className="number">20</div>
        <div className="card-name">Alertas normais</div>
      </div>
      <div className="icon-box">
        <i className="fas fa-users" />
      </div>
    </div>
    <div className="card concluido">
      <div className="card-conten">
        <div className="number">20</div>
        <div className="card-name">Alertas concluído</div>
      </div>
      <div className="icon-box">
        <i className="fas fa-users" />
      </div>
    </div>

</div>



 




    )
}

export default Painel
