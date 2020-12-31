import React from "react";
import { useDispatch } from "react-redux";
import { loadNewPhotos } from "../store/fotos.js";
import CarregarMaisFotos from "./CarregarMaisFotos.js";
import ConteudoFotos from "./ConteudoFotos.js";

const Fotos = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(loadNewPhotos());
    }, [dispatch]);

    return (
        <section>
            <ConteudoFotos />
            <CarregarMaisFotos />
        </section>
    );
};

export default Fotos;
