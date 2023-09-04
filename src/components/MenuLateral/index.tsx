import Logo from "../../assets/img/Logo Branco D - IntegraDash.png"
import Home from "../../assets/img/icone-home.png"
import Analises from "../../assets/img/icone-analises.png"
import Estrategia from "../../assets/img/icone-cavalo.png"
import Favoritos from "../../assets/img/icone-favoritos.png"
import Alertas from "../../assets/img/icone-alertas.png"
import Configuracoes from "../../assets/img/icone-config.png"
import Sair from "../../assets/img/icone-sair.png"
import Lupa from "../../assets/img/icone-lupa.png"

import "./style.css"

function MenuLateral() {
    return (
        <>
            <aside>
                <section className="menu-fechado">
                    <div className="esquerda">
                        <img
                            className="logo"
                            src={Logo}
                            alt="Logo - IntegraDash"
                        />
                        <div className="posicionamento_menupaginas">
                            <div className="p-menu">
                                <button className="btn-menu home">
                                    <img
                                        className="i-home"
                                        src={Home}
                                        alt="Icone de Casinha"
                                    />
                                </button>
                                <button className="btn-menu analises">
                                    <img
                                        className="i-analises"
                                        src={Analises}
                                        alt="Icone de Análises"
                                    />
                                </button>
                                <button className="btn-menu cavalo">
                                    <img
                                        className="i-cavalo"
                                        src={Estrategia}
                                        alt="Icone de Cavalo"
                                    />
                                </button>
                                <button className="btn-menu coracao">
                                    <img
                                        className="i-coracao"
                                        src={Favoritos}
                                        alt="Icone de Coração"
                                    />
                                </button>
                                <button className="btn-menu alertas">
                                    <img
                                        className="i-alertas"
                                        src={Alertas}
                                        alt="Icone de Alertas"
                                    />
                                </button>

                                <div className="p-menu s">
                                    <button className="btn-menu config">
                                        <img
                                            className="i-config"
                                            src={Configuracoes}
                                            alt="Icone de Configurações"
                                        />
                                    </button>
                                    <button className="btn-menu sair">
                                        <img
                                            className="i-sair"
                                            src={Sair}
                                            alt="Icone de Sair"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="direita">
                        <div className="posicionamento_favoritos">
                            <span>Análises</span>
                            <div className="favoritos">
                                <span>Favoritos</span>
                                <div className="copas">
                                    <img
                                        className="heart"
                                        src={Favoritos}
                                        alt="Logo - IntegraDash"
                                    />
                                    <span>Taubaté</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="menu-aberto">
                    <div className="posicionamento_logo">
                        <img
                            className="logo"
                            src={Logo}
                            alt="Logo - IntegraDash"
                        />
                    </div>
                    <div className="posicionamento_menupaginaseaberto">
                        <div className="p-menu">
                            <div className="lupa">
                                <input type="search" />
                                <button>
                                    <img
                                        className="icone-lupa"
                                        src={Lupa}
                                        alt="Icone de Lupa"
                                    />
                                </button>
                            </div>
                            <button className="btn-menu home">
                                <img
                                    className="i-home"
                                    src={Home}
                                    alt="Icone de Casinha"
                                />
                                Visão Geral
                            </button>
                            <button className="btn-menu analises">
                                <img
                                    className="i-analises" 
                                    src={Analises}
                                    alt="Icone de Análises"
                                />
                                Análises
                            </button>
                            <button className="btn-menu cavalo">
                                <img
                                    className="i-cavalo"
                                    src={Estrategia}
                                    alt="Icone de Cavalo"
                                />
                                Estratégia
                            </button>
                            <button className="btn-menu coracao">
                                <img
                                    className="i-coracao"
                                    src={Favoritos}
                                    alt="Icone de Coração"
                                />
                                Favoritos
                            </button>
                            <button className="btn-menu alertas">
                                <img
                                    className="i-alertas"
                                    src={Alertas}
                                    alt="Icone de Alertas"
                                />
                                Alertas
                            </button>
                        </div>
                        <div className="p-menu s">
                            <button className="btn-menu config">
                                <img
                                    className="i-config"
                                    src={Configuracoes}
                                    alt="Icone de Configurações"
                                />
                                Configurações
                            </button>
                            <button className="btn-menu sair">
                                <img
                                    className="i-sair"
                                    src={Sair}
                                    alt="Icone de Sair"
                                />
                                Sair
                            </button>
                        </div>
                        <div className="p-menu s s2">
                            <label for="mudar-estado">White Mode</label>
                            <input
                                className="barra"
                                type="range"
                                min="0"
                                max="1"
                                name="mudar-estado"
                                id="mudar-estado"
                            />
                        </div>
                    </div>
                </section>
            </aside>
        </>
    )
}
export default MenuLateral;