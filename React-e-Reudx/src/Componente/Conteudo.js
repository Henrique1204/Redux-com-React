import React from "react";
import { useSelector } from "react-redux";
import Fotos from "./Fotos.js";
import Login from "./Login.js";
import Loading from "./Util/Loading.js";

const Conteudo = () => {
    const { token, user } = useSelector((state) => state.login);

    if (token.loading || user.loading) return <Loading />;
    if (user.dados) return <Fotos />;
    else return <Login />
};

export default Conteudo;
