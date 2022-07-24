import rodada from "/home/mateus/Projetos/projeto8-zaprecall/src/componentes/img/rodada.svg";
import negativo from "/home/mateus/Projetos/projeto8-zaprecall/src/componentes/img/negativo.svg";
import Questoes from "../Pergunta-Array";
import React from "react";

Questoes.sort(() => Math.random() - 0.5);

export default function Pergunta(resposta, setResposta, nao, setNao) {
  const img = (
    <div className="icon">
      <img src={rodada} onClick={() => setResposta(false)} />
    </div>
  );

  const NaoLembrei = (
    <div className="card">
      <p1 className="NaoLembrei"> Pergunta 1</p1>
      <img src={negativo} />
    </div>
  );

  const button = (
    <div className="ButaoEstilo">
      <button
        onClick={() => {
          setNao(false);
          console.log(nao);
        }}
        className="Bvermelho"
      >
        Não lembrei
      </button>
      <button className="Bamarelo">Quase não lembrei</button>
      <button className="Bverde">Zap!</button>
    </div>
  );

  return [
    nao ? (
      <div className="pergunta">
        <p>{resposta ? Questoes[0].questao : Questoes[0].resposta}</p>
        <div>{resposta ? img : button}</div>
      </div>
    ) : (
      NaoLembrei
    ),

    <div className="pergunta">
      <p>{resposta ? Questoes[1].questao : Questoes[1].resposta}</p>
      <div>{resposta ? img : button}</div>
    </div>,

    <div className="pergunta">
      <p>{resposta ? Questoes[2].questao : Questoes[2].resposta}</p>
      <div>{resposta ? img : button}</div>
    </div>,

    <div className="pergunta">
      <p>{resposta ? Questoes[3].questao : Questoes[3].resposta}</p>
      <div>{resposta ? img : button}</div>
    </div>,
  ];
}
