import react from "react";
import rodada from "/home/mateus/Projetos/projeto8-zaprecall/src/componentes/img/rodada.svg";
import Questoes from "../Pergunta-Array";

Questoes.sort(() => Math.random() - 0.5);

export default function Pergunta(resposta, setResposta) {
  return [
    <div className="pergunta">
      <p>{resposta ? Questoes[0].questao : Questoes[0].resposta}</p>
      <div>
        <img src={rodada} onClick={() => setResposta(false)} />
      </div>
    </div>,

    <div className="pergunta">
      <p>{resposta ? Questoes[1].questao : Questoes[1].resposta}</p>
      <div>
        <img src={rodada} onClick={() => setResposta(false)} />
      </div>
    </div>,

    <div className="pergunta">
      <p>{resposta ? Questoes[2].questao : Questoes[2].resposta}</p>
      <div>
        <img src={rodada} onClick={() => setResposta(false)} />
      </div>
    </div>,

    <div className="pergunta">
      <p>{resposta ? Questoes[3].questao : Questoes[3].resposta}</p>
      <div>
        <img src={rodada} onClick={() => setResposta(false)} />
      </div>
    </div>,
  ];
}
