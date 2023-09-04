import Calendar from "react-calendar";
import "./style.css"
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom";
import { useState } from "react";


function Alertas() {
  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];

    const [value, onChange] = useState<Value>(new Date());
  
    return (
      <div className="testecalendario">
        <Calendar onChange={onChange} value={value} />
        
      </div>
      
    );
    
  
  //return (
    //<>
        {/* <div className="calendario">
          <img className="botaocomecar" src="img/Botão Começar.png" alt="" />
          <div className="month">
            <ul>
              <li className="prev">❮</li>
              <li className="next">❯</li>
              <li>
                Agosto <br />
                <span style={{ fontSize: 18 }}>2023</span>
              </li>
            </ul>
          </div>
          <ul className="weekdays">
            <li>Domingo</li>
            <li>Segunda-Feira</li>
            <li>Terça-feira</li>
            <li>Quarta-feira</li>
            <li>Quinta-feira</li>
            <li>Sexta-feira</li>
            <li>Sábado</li>
          </ul>
          <ul className="days">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>
              <span className="active">10</span>
            </li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
            <li>31</li>
          </ul>
        </div>
        <div className="printemail">
          <span>Prints de e-mails.</span>
          <img className="cinco" src="img/5.png" />
        </div>
        <div className="analises">
          <span>Análises</span>
          <img className="tres" src="img/3.png" />
        </div> */}
     
   // </>



 // )
}


export default Alertas