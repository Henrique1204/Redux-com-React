import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store/login";
import estilos from "./Header.module.css";

const Header = () => {
    const { token, user } = useSelector((state) => state.login);
    const loading = token.loading || user.loading;

    const dispatch = useDispatch();

    return (
        <header className={estilos.header} >
            <h1 className={estilos.titulo} >Mini Dogs</h1>

            <button
                onClick={() => dispatch(userLogout())}
                aria-label="Logout"
                className={`
                    ${estilos.login}
                    ${(loading) ? estilos.loading : ""}
                    ${(user.dados) ? estilos.logado : ""}
                `}
            >

                </button>
        </header>
    ); 
};

export default Header;
