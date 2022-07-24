import "./style.css";
import react from "react";
import Card from "./Card";
import Acerto from "./footer";
import raio from "../img/raioPequeno.svg";

export default function Renderiza({
  setCard1,
  card1,
  setCard2,
  card2,
  card3,
  setCard3,
  card4,
  setCard4,
  setResposta,
  resposta,
  setResposta2,
  resposta2,
  setResposta3,
  resposta3,
  setResposta4,
  resposta4,
}) {
  return (
    <>
      <div className="section">
        <div className="topo">
          <img src={raio} />
          <h1>ZapRecall</h1>
        </div>
        <div className="cards">
          <Card
            setCard1={setCard1}
            card1={card1}
            setCard2={setCard2}
            card2={card2}
            setCard3={setCard3}
            card3={card3}
            setCard4={setCard4}
            card4={card4}
            resposta={resposta}
            setResposta={setResposta}
            setResposta2={setResposta2}
            resposta2={resposta2}
            resposta3={resposta3}
            setResposta3={setResposta3}
            resposta4={resposta4}
            setResposta4={setResposta4}
          />
        </div>
      </div>
      <Acerto />
    </>
  );
}
