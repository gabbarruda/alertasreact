import Lupa from "../../assets/img/icone-lupa-principal.png"
import alertHome from "../../assets/img/icone-alert-home.png"
import Foto from "../../assets/img/img-user.png"
import Perfil from "../../assets/img/icone-btn-user-info.png"
import "./style.css"




function Header() {
    return (
        <>
            <div className="inicio-lateral">
                <div className="lupa-alert">
                    <div className="lupa">
                        <input className="lupa-input-centro" type="search"/>
                            <button className="btn-lupa-principal">
                                <img 
                                className="icone-lupa-principal" 
                                src={Lupa} 
                                alt="Icone de Lupa na Seção Principal"
                                />
                            </button>
                    </div>
                    <button className="alert">
                        <img 
                        src={alertHome} 
                        alt="Icone de Alerta da Tela Principal"
                        />
                    </button>
                </div>
                <div className="usuario">
                    <img 
                    className="foto-user" 
                src={Foto} 
                    alt="Foto do Usuário"
                    />
                        <span>Nome do Usuário</span>
                        <a href="#">
                            <img 
                            src={Perfil} 
                            alt="btn-user-info"
                            />
                        </a>
                </div>
            </div>
        </>
    )
}
export default Header