import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Conteudo from "./Componente/Conteudo.js";
import Header from "./Componente/Header.js";
import { autoLogin } from "./store/login.js";

const App = () =>  {
  // Estados Globais.
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);
  return (
    <div className="container">
      <Header />

      <Conteudo />
    </div>
  );
}

export default App;
