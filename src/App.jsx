import { useState, createContext } from "react";
import "./App.css";
import Nota from "./components/Nota/Nota";
import { Contexto } from "./components/Contexto/Contexto";
import Login from "./components/LoginTemplate/LoginTemplate";
import InicioExitoso from "./components/InicioExitoso.jsx/InicioExitoso";
import LoginContex from "./components/LoginContex/LoginContex";
import SwitchLogin from "./components/LoginContex/switchLogin";

function App() {
  // const notasContex = createContext();
  return (
    <>
      {/* <Contexto>
        <Nota />
      </Contexto> */}
      {/* {!login ? <Login setLogin={setLogin}/> : <InicioExitoso setLogin={setLogin}/>} */}
      <LoginContex>
        <SwitchLogin/>
      </LoginContex>
    </>
  );
}

export default App;
