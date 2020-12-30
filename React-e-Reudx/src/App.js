import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () =>  {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Estado: {state}</h1>
      <button onClick={() => dispatch({ type: "INCREMENTAR" }) } >Incrementar</button>
    </div>
  );
}

export default App;
