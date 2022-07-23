import React from "react";
import "./style.css";
import logo from "../img/raioGrande.svg";

export default function Layout({ setHome }) {
  return (
    <>
      <div className="tela-inical">
        <img src={logo} />
        <h1>ZapRecall</h1>
        <button onClick={() => setHome(false)}>Iniciar Recall!</button>
      </div>
    </>
  );
}
