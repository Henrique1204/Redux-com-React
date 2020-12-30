import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./store/login";

// Encademaneto opcional: dados?.token
// Caso o valor de "token" não seja encontrado, ele retorna "dados".

const App = () =>  {
  // Estados Globais.
  const dispatch = useDispatch();

  // Estados locais.
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(login({ username, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{ display: "block" }} htmlFor="username">Usuário</label>
      <input id="username" type="text" value={username} onChange={({ target }) => setUsername(target.value)} />

      <label style={{ display: "block" }} htmlFor="password">Senha</label>
      <input id="password" type="password" value={password} onChange={({ target }) => setPassword(target.value)} />

      <button style={{ display: "block" }} >Enviar</button>
    </form>
  );
}

export default App;
