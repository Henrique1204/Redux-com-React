import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFotos, filtrarCincoKilosMais } from "./store/fotos.js";

const Foto = () => {
    const dados = useSelector(filtrarCincoKilosMais);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchFotos());
    }, [dispatch]);

    if (!dados) return null;

    return (
        <div>
            {
                dados.map((foto) => (
                    <li key={foto.id}>{foto.title} | {foto.peso}</li>
                ))
            }
        </div>
    );
};

export default Foto;
