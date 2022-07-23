import react from "react";
import setinha from "/home/mateus/Projetos/projeto8-zaprecall/src/componentes/img/Vector.svg";
export default function Card({ setClicado }) {
  return (
    <>
      <div className="card">
        <p>Pergunta 1</p>
        <img onClick={() => setClicado(false)} src={setinha} />
      </div>
    </>
  );
}
