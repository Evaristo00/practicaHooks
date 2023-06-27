import React, { useContext, useRef, useState } from "react";
import { Login } from "../LoginContex/LoginContex";
import { Button, Grid, TextField, Alert, AlertTitle } from "@mui/material";

function LoginTemplate() {
  const { setLogin } = useContext(Login);
  const userName = useRef("");
  const userPassword = useRef("");
  const [showAlert, setShowAlert] = useState(false);

  const handleLoginTemplate = (event) => {
    event.preventDefault();

    const enteredUserName = userName.current.value;
    const enteredPassword = userPassword.current.value;

    if (enteredUserName === "123" && enteredPassword === "123") {
      setLogin(true);
      console.log("Inicio de sesión exitoso");
    } else {
      setLogin(false);
      console.log("Credenciales incorrectas");
      setShowAlert(true);
    }

    // Limpiar los campos de entrada
    userName.current.value = "";
    userPassword.current.value = "";
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Grid container spacing={2} component="form" onSubmit={handleLoginTemplate}>
      <Grid item xs={12}>
        <TextField
          label="Nombre de usuario"
          inputRef={userName}
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Contraseña"
          type="password"
          inputRef={userPassword}
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Grid>
      {showAlert && (
        <Grid item xs={12}>
          <Alert severity="error" onClose={handleCloseAlert}>
            <AlertTitle>Error</AlertTitle>
            Credenciales incorrectas
          </Alert>
        </Grid>
      )}
    </Grid>
  );
}

export default LoginTemplate;
