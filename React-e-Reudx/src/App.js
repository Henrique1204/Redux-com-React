import React from "react";
import { useDispatch } from "react-redux";
import { adicionarDatas } from "./store/data";

const App = () =>  {
  // Estados locais.
  const [partida, setPartida] = React.useState("");
  const [retorno, setRetorno] = React.useState("");

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(adicionarDatas({ partida, retorno }));
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="partida" style={{ display: "block" }} >Partida: {partida}</label>
      <input type="date" id="partida" name="partida" value={partida} onChange={({ target }) => setPartida(target.value)} />

      <label htmlFor="retorno" style={{ display: "block" }} >Retorno: {retorno}</label>
      <input type="date" id="retorno" name="retorno" value={retorno} onChange={({ target }) => setRetorno(target.value)} />

      <button>Buscar</button>
    </form>
  );
}

export default App;
