import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementar, reduzir } from "./store/contador.js";
import { abrir, fechar } from "./store/modal.js";

const App = () =>  {
  const { contador } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Total: {contador.total}</h1>
      <button onClick={() => dispatch(incrementar())} >Incrementar</button>
      <button onClick={() => dispatch(reduzir())} >Reduzir</button>
  

      <button onClick={() => dispatch(abrir())} >Abrir</button>
      <button onClick={() => dispatch(fechar())} >Fechar</button>
    </div>
  );
}

export default App;
