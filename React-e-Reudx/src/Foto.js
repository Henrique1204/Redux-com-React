import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFotos } from "./store/fotos.js";

const Foto = () => {
    const { dados } = useSelector((state) => state.fotos);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchFotos());
    }, [dispatch]);

    if (!dados) return null;

    return (
        <div>
            {
                dados.map((foto) => (
                    <li key={foto.id}>{foto.title}</li>
                ))
            }
        </div>
    );
};

export default Foto;
