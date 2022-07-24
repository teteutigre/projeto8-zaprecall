import react from "react";
import Layout from "./componentes/Home";
import Renderiza from "./componentes/Game";

export default function App() {
  const [home, setHome] = react.useState(true);

  const [card1, setCard1] = react.useState(true);
  const [card2, setCard2] = react.useState(true);
  const [card3, setCard3] = react.useState(true);
  const [card4, setCard4] = react.useState(true);

  const [resposta, setResposta] = react.useState(true);
  const [resposta2, setResposta2] = react.useState(true);
  const [resposta3, setResposta3] = react.useState(true);
  const [resposta4, setResposta4] = react.useState(true);

  const [nao, setNao] = react.useState(true);
  const [quase, setQuase] = react.useState(true);
  const [zap, setZap] = react.useState(true);

  return (
    <div className="container">
      {home ? (
        <Layout setHome={setHome} />
      ) : (
        <Renderiza
          card1={card1}
          setCard1={setCard1}
          card2={card2}
          setCard2={setCard2}
          setCard3={setCard3}
          card3={card3}
          card4={card4}
          setCard4={setCard4}
          resposta={resposta}
          setResposta={setResposta}
          resposta2={resposta2}
          setResposta2={setResposta2}
          resposta3={resposta3}
          setResposta3={setResposta3}
          resposta4={resposta4}
          setResposta4={setResposta4}
          nao={nao}
          setNao={setNao}
          quase={quase}
          setQuase={setQuase}
          zap={zap}
          setZap={setZap}
        />
      )}
    </div>
  );
}
