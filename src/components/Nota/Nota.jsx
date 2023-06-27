import React, { useContext, useState } from "react";
import { tareasContext } from "../Contexto/Contexto";
import { Button, Grid, TextField, Typography } from "@mui/material";

export default function Nota() {
  const context = useContext(tareasContext);
  const [notas, setNotas] = useState([]);
  const [notaActual, setNotaActual] = useState("");

  const onChangeNota = (event) => {
    setNotaActual(event.target.value);
  };

  const onClickAgregarNota = () => {
    console.log(context);
    if (notaActual !== "") {
      setNotas([...notas, notaActual]);
      // context.incrementarNota();
    } else {
      console.log("La nota está vacía.");
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          type="text"
          onChange={onChangeNota}
          value={notaActual}
          label="Nueva nota"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={onClickAgregarNota}
          fullWidth
        >
          Agregar nota
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" component="ul">
          {notas.map((el, i) => (
            <Typography variant="body1" component="li" key={i}>
              {el}
            </Typography>
          ))}
        </Typography>
      </Grid>
    </Grid>
  );
}
