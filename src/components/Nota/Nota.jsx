import React, { useContext,useState } from "react";
import { tareasContext } from "../Contexto/Contexto";



export default function Nota() {
  const context = useContext(tareasContext);
  const [notas, setNotas] = useState([]);
  const [notaActual, setNotaActual] = useState("");


  const onChangeNota = (event) => {
    setNotaActual(event.target.value);
  };

  const onClickAgregarNota = () => {
    console.log(context)
    if (notaActual !== "") {
      setNotas([...notas, notaActual]);
      context.incrementarNota();
    } else {
      console.log("La nota está vacía.");
    }
  };

  return (
    <div>
      <ul>
        {notas.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
      <input type="text" onChange={onChangeNota} value={notaActual} />
      <button onClick={onClickAgregarNota}>Agregar nota</button>
    </div>
  );
}
