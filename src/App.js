import react from "react";
import Layout from "./componentes/Home";
import Game from "./componentes/Game";

export default function App() {
  const [home, setHome] = react.useState(true);

  return (
    <div className="container">
      {home ? <Layout setHome={setHome} /> : <Game />}
    </div>
  );
}
