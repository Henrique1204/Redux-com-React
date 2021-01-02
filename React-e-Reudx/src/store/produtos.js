import { createSlice } from "@reduxjs/toolkit";
import dados from "../dados.js";

const slice = createSlice({
    name: "produtos",
    initialState: {
        dados,
        filtros: {
            cores: [],
            precos: {
                max: 0,
                min: 0
            }
        }
    },
    reducers: {
        alterarFiltro(state, action) {
            state.filtros[action.payload.nome] = action.payload.valor;
        }
    }
});

// Set é um objeto de JavaScript especial que parece uma Array (Array like) e contém apenas valores únicos.
// Ele não vem como todos os métodos de Array, por isso é preciso converter ele em Array.
export const selectUniqueColors = ({ produtos }) => Array.from(new Set(produtos.dados.map(({ color }) => color)));

export const { alterarFiltro }  = slice.actions;

export default slice.reducer;
