import React from "react";
import { useSelector } from "react-redux";

const filtrarPorCor = (cores) => ({ color }) => !cores.length || cores.includes(color);

const filtrarPorPreco = ({ max, min }) => {
    return ({ price }) => (!max || price <= max) && (!min || price >= min);
};

const filtrarProdutos = ({ produtos }) => {
    const { dados, filtros } = produtos;

    return dados.filter(filtrarPorCor(filtros.cores)).filter(filtrarPorPreco(filtros.precos));
}

const Produto = () => {
    const dados = useSelector(filtrarProdutos);

    return (
        <table>
            <thead>
                <tr>
                    <th>nome</th>
                    <th>cor</th>
                    <th>preço</th>
                </tr>
            </thead>

            <tbody>
                {
                    dados.map(({id, name, color, price}) => (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{color}</td>
                            <td>{price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default Produto;
