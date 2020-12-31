import React from "react";
import estilos from "./ConteudoFotos.module.css";
import { useSelector } from "react-redux";

const ConteudoFotos = () => {
    const { lista } = useSelector((state) => state.fotos);

    return (
        <ul className={estilos.lista} >
            {
                lista.map((foto) => (
                    <li key={foto.id} className={`${estilos.item} anime`} >
                        <img src={foto.src} alt={foto.title} className={estilos.img} />
                        <h2 className={estilos.titulo} >{foto.title}</h2>
                        <span className={estilos.acessos} >{foto.acessos}</span>
                    </li>
                ))
            }
        </ul>
    );
};

export default ConteudoFotos;
