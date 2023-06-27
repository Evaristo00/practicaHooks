import React, { useRef } from "react";

export const tareasContext = React.createContext();

export const Contexto = ({ children }) => {
  const contadorNotas = useRef(0);

  function incrementarNota() {
    contadorNotas.current += 1;
  }

  function reseteoNota() {
    contadorNotas.current = 0;
  }

  return (
    <tareasContext.Provider
      value={{ contadorNotas, incrementarNota, reseteoNota }}
    >
      {children}
    </tareasContext.Provider>
  );
};
