import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/login";

const App = () =>  {
  // Estados Globais.
  const dados = useSelector((state) => state.login);
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
      <small>
        {
          // Encadeamento opcional, caso ele não encontre o valor "token" dentro de "dados", ele retornará o próprio "dados".
          dados?.token?.dados?.token
        }
      </small>
    </form>
  );
}

export default App;
