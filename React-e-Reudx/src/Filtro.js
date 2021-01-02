import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { alterarFiltro, selectUniqueColors } from "./store/produtos";

const Filtro = () => {
    // Estados globais.
    const cores = useSelector(selectUniqueColors);
    const dispatch = useDispatch();

    // Estados locais;
    const [precoMin, setPrecoMin] = React.useState("");
    const [precoMax, setPrecoMax] = React.useState("");
    const [coresSelecionadas, setCoresSelecionadas] = React.useState([]);

    const handleChange = ({ target }) => {
        if (target.checked) {
            setCoresSelecionadas([...coresSelecionadas, target.value]);
        } else {
            setCoresSelecionadas(coresSelecionadas.filter((cor) => cor !== target.value));
        }
    }

    const handleChecked = (cor) => coresSelecionadas.includes(cor);

    React.useEffect(() => {
        dispatch(alterarFiltro({ nome: "cores", valor: coresSelecionadas }));
    }, [coresSelecionadas, dispatch]);

    React.useEffect(() => {
        dispatch(alterarFiltro({
            nome: "precos",
            valor: {
                min: Number(precoMin),
                max: Number(precoMax)
            }
        }));
    }, [precoMin, precoMax ,dispatch]);

    return (
        <div>
            <input
                type="number"
                value={precoMin}
                onChange={({ target }) => setPrecoMin(target.value)}
                placeholder="Preço mínimo"
            />

            <input
                type="number"
                value={precoMax}
                onChange={({ target }) => setPrecoMax(target.value)}
                placeholder="Preço máximo"
            />

            {
                cores.map((cor) => (
                    <label key={cor} >
                        <input
                            type="checkbox"
                            value={cor}
                            onChange={handleChange}
                            checked={handleChecked(cor)}
                        />
                        {cor}
                    </label>
                ))
            }
        </div>
    );
};

export default Filtro;
