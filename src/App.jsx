import { useState, createContext } from "react";
import "./App.css";
import Nota from "./components/Nota/Nota";
import { Contexto } from "./components/Contexto/Contexto";

function App() {
  const notasContex = createContext();

  return (
    <>
      <Contexto>
        <Nota />
      </Contexto>
    </>
  );
}

export default App;
