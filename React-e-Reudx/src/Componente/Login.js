import React from "react";
import estilos from "./Login.module.css";
import { useDispatch } from "react-redux";
import { login } from "../store/login.js";

const Login = () => {
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
        <form className="anime" onSubmit={handleSubmit} >
            <label className={estilos.label} htmlFor="username">Usuário</label>
            <input
                className={estilos.input}
                id="username" type="text"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
            />

            <label className={estilos.label} htmlFor="password">Senha</label>
            <input
                className={estilos.input}
                id="password"
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
            />

            <button className={estilos.button} >Enviar</button>
        </form>
    );
};

export default Login;
