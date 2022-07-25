import setinha from "../../img/Vector.svg";
import rodada from "../../img/rodada.svg";
import negativo from "../../img/negativo.svg";
import quase from "../../img/quase.svg";
import acerto from "../../img/Acerto.svg";

import React from "react";

export default function Card({
  questao,
  resposta,
  numero,
  escolha,
  setEscolha,
}) {
  const [card, setCard] = React.useState(true);
  const [classe, setClasse] = React.useState("card");
  const [icon, setIcon] = React.useState("");
  const [conclusao, setConclusao] = React.useState(false);
  const [p, setP] = React.useState("");
  const [buttonIcon, setButtonIcon] = React.useState(setinha);

  return (
    <div className={classe}>
      <p className={p}>
        {conclusao ? resposta : icon === "" ? `Pergunta ${numero}` : questao}
      </p>
      <div className={icon}>
        {!conclusao ? (
          icon === "" ? (
            <img
              onClick={() => {
                setClasse("pergunta");
                setIcon("icon");
              }}
              src={buttonIcon}
            />
          ) : (
            <img
              onClick={() => {
                setConclusao(true);
              }}
              src={rodada}
            />
          )
        ) : (
          <div className="ButaoEstilo">
            <button
              onClick={() => {
                setEscolha([...escolha, negativo]);
                setClasse("card");
                setConclusao(false);
                setIcon("");
                setP("NaoLembrei");
                setButtonIcon(negativo);
              }}
              className="Bvermelho"
            >
              Não lembrei
            </button>
            <button
              onClick={() => {
                setEscolha([...escolha, quase]);
                setClasse("card");
                setConclusao(false);
                setIcon("");
                setP("Quase");
                setButtonIcon(quase);
              }}
              className="Bamarelo"
            >
              Quase não lembrei
            </button>

            <button
              onClick={() => {
                setEscolha([...escolha, acerto]);
                setClasse("card");
                setConclusao(false);
                setIcon("");
                setP("zap");
                setButtonIcon(acerto);
              }}
              className="Bverde"
            >
              Zap!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
