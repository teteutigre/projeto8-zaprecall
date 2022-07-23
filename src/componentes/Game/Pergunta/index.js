import rodada from "/home/mateus/Projetos/projeto8-zaprecall/src/componentes/img/rodada.svg";
import Questoes from "../Pergunta-Array";
export default function Pergunta() {
  return (
    <>
      <div className="pergunta">
        <p>{Questoes[0].questao}</p>
        <div>
          <img src={rodada} />
        </div>
      </div>
    </>
  );
}
