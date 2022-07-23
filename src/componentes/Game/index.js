import "./style.css";
import react from "react";
import Card from "./Cards";
import Acerto from "./footer";
import raio from "../img/raioPequeno.svg";

const [clicado, setClicado] = react.useState(true);
export default function Renderiza() {
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
