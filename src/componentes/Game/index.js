import "./style.css";
import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import raio from "../img/raioPequeno.svg";
import ArrayCard from "./Pergunta-Array";

export default function Game() {
  const [escolha, setEscolha] = React.useState([]);

  return (
    <>
      <div className="section">
        <div className="topo">
          <img src={raio} />
          <h1>ZapRecall</h1>
        </div>
        <div className="cards">
          {ArrayCard.map((elemento, indice) => {
            return (
              <Card
                key={indice}
                numero={indice + 1}
                questao={elemento.questao}
                resposta={elemento.resposta}
                escolha={escolha}
                setEscolha={setEscolha}
              />
            );
          })}
        </div>
      </div>
      <Footer escolha={escolha} />
    </>
  );
}
