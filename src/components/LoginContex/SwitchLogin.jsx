import React, { useContext } from "react";
import InicioExitoso from "../InicioExitoso.jsx/InicioExitoso";
import { Login } from "./LoginContex";
import LoginTemplate from "../LoginTemplate/LoginTemplate";
import Nota from "../Nota/Nota";

function SwitchLogin() {
  const { login } = useContext(Login);

  return <>{!login ?
    <LoginTemplate />
  :
    <>
    <div style={{ position: "fixed", top: 0, width: "100%", padding: "10px", textAlign: "center" }}>
    <InicioExitoso />
    </div>
    <Nota/>
    </>
    }
  </>;
}

export default SwitchLogin;
