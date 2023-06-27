import React, { useState } from 'react'

export const Login = React.createContext();

function LoginContex({ children }) {
  const [login, setLogin] = useState(false)


  return (
    <Login.Provider
    value={{ setLogin, login}}
  >
    {children}
  </Login.Provider>
  )
}

export default LoginContex