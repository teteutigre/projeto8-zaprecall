import react from "react";
import Layout from "./componentes/Home";
import Renderiza from "./componentes/Game";

export default function App() {
  const [home, setHome] = react.useState(true);
  const [clicado, setClicado] = react.useState(true);
  return (
    <div className="container">
      {home ? (
        <Layout setHome={setHome} />
      ) : (
        <Renderiza clicado={clicado} setClicado={setClicado} />
      )}
    </div>
  );
}
