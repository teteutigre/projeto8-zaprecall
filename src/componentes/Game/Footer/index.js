import "./style.css";
import negativo from "../../img/negativo.svg";
import quase from "../../img/quase.svg";
import acerto from "../../img/Acerto.svg";
import party from "../../img/party.svg";
import sad from "../../img/sad.svg";

import React from "react";

export default function Footer({ escolha }) {
  return (
    <footer className={escolha.length === 4 ? "resultado" : ""}>
      <div>
        {escolha.map((elemento, indice, array) => {
          if (indice + 1 === 4) {
            if (array.includes(negativo)) {
              return (
                <>
                  <div>
                    <div className="emoji">
                      <img src={sad} />
                      <p>Putz...</p>
                    </div>
                    <h2>
                      Ainda faltam alguns... <br /> Mas não desanime!
                    </h2>
                  </div>
                </>
              );
            } else {
              return (
                <div>
                  <div className="emoji">
                    <img src={party} />
                    <p>Parabéns!</p>
                  </div>
                  <h2>
                    Você não esqueceu de <br /> nenhum flashcard!
                  </h2>
                </div>
              );
            }
          }
        })}
        <h2>{escolha.length}/4 CONCLUÍDOS</h2>
        <div className="valores">
          {escolha.map((elemento, indice) => (
            <img src={elemento} key={indice} />
          ))}
        </div>
      </div>
    </footer>
  );
}
