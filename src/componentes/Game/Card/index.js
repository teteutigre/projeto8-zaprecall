import react from "react";
import Pergunta from "../Pergunta";
import setinha from "/home/mateus/Projetos/projeto8-zaprecall/src/componentes/img/Vector.svg";
import negativo from "/home/mateus/Projetos/projeto8-zaprecall/src/componentes/img/negativo.svg";
import quaseimg from "/home/mateus/Projetos/projeto8-zaprecall/src/componentes/img/quase.svg";
import zapimg from "/home/mateus/Projetos/projeto8-zaprecall/src/componentes/img/Acerto.svg";

export default function Card({
  card1,
  setCard1,
  card2,
  setCard2,
  setCard3,
  card3,
  card4,
  setCard4,
  resposta,
  setResposta,
  setResposta2,
  resposta2,
  setResposta3,
  resposta3,
  setResposta4,
  resposta4,
  setNao,
  nao,
  quase,
  setQuase,
  zap,
  setZap,
}) {
  const NaoLembrei = (
    <div className="card">
      <p1 className="NaoLembrei"> Pergunta 1</p1>
      <img src={negativo} />
    </div>
  );

  const QuaseLembrei = (
    <div className="card">
      <p1 className="Quase"> Pergunta 1</p1>
      <img src={quaseimg} />
    </div>
  );

  const AcertoZap = (
    <div className="card">
      <p1 className="zap"> Pergunta 1</p1>
      <img src={zapimg} />
    </div>
  );

  const p1 = (
    <div className="card">
      <p>Pergunta 1</p>
      <img onClick={() => setCard1(false)} src={setinha} />
    </div>
  );

  const c1 = nao ? p1 : NaoLembrei;

  const c2 = (
    <div className="card">
      <p>Pergunta 2</p>
      <img src={setinha} onClick={() => setCard2(false)} />
    </div>
  );

  const c3 = (
    <div className="card">
      <p>Pergunta 3</p>
      <img onClick={() => setCard3(false)} src={setinha} />
    </div>
  );

  const c4 = (
    <div className="card">
      <p>Pergunta 4</p>
      <img onClick={() => setCard4(false)} src={setinha} />
    </div>
  );

  return (
    <>
      {card1
        ? c1
        : Pergunta(resposta, setResposta, setNao, setQuase, setZap)[0]}

      {card2 ? c2 : Pergunta(resposta2, setResposta2)[1]}

      {card3 ? c3 : Pergunta(resposta3, setResposta3)[2]}

      {card4 ? c4 : Pergunta(resposta4, setResposta4)[3]}
    </>
  );
}
