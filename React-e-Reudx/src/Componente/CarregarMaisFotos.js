import React from "react";
import estilos from "./CarregarMaisFotos.module.css";
import Loading from "./Util/Loading.js";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos } from "../store/fotos";

const CarregarMaisFotos = () => {
    const dispatch = useDispatch();
    const { pages, infinite, loading } = useSelector((state) => state.fotos);

    const handleClick = () => {
        dispatch(loadNewPhotos(pages + 1));
    };

    if (loading) return <Loading />

    if (!infinite) return null;

    return (
        <button onClick={handleClick} className={estilos.button}>+</button>
    );
};

export default CarregarMaisFotos;
