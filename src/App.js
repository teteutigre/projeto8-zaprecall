import React from "react";
import Layout from "./componentes/Home";
import Renderiza from "./componentes/Game";

export default function App() {
  const [home, setHome] = React.useState(true);
  return (
    <div className="container">
      {home ? <Layout setHome={setHome} /> : <Renderiza />}
    </div>
  );
}
