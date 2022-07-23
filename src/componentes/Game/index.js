import "./style.css";
import Pergunta from "./Pergunta";
import react from "react";
import Card from "./Card";
import Acerto from "./footer";
import raio from "../img/raioPequeno.svg";

export default function Renderiza({ clicado, setClicado }) {
  return (
    <>
      <div className="section">
        <div className="topo">
          <img src={raio} />
          <h1>ZapRecall</h1>
        </div>
        <div className="cards">
          {clicado ? <Card setClicado={setClicado} /> : <Pergunta />}
        </div>
      </div>
      <Acerto />
    </>
  );
}
