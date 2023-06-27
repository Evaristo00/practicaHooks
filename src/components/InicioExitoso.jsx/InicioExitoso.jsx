import React, { useContext } from "react";
import { Login } from "../LoginContex/LoginContex";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function InicioExitoso() {
  const { setLogin } = useContext(Login);

  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center"}}>
            Inicio Exitoso
          </Typography>
          <Box>
            <Button color="inherit" onClick={handleLogout}>
              Log Out
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Agrega un espacio para compensar el AppBar fijo */}
    </>
  );
}

export default InicioExitoso;
