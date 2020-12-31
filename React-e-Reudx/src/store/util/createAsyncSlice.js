import { createSlice } from "@reduxjs/toolkit";

/**
 * Criar um slice assincrono.
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 */
const createAsyncSlice = (config) => {
    const slice = createSlice({
        name: config.name,
        initialState: {
            loading: false,
            dados: null,
            erro: null,
            lastUpdate: 0,
            cache: 5000,
            ...config.initialState
        },
        reducers: {
            fetchStarted(state) {
                state.loading = true;
            },
            fetchSucess(state, action) {
                state.loading = false;
                state.dados = action.payload;
                state.erro = null;
            },
            fetchFail(state, action) {
                state.loading = false;
                state.dados = null;
                state.erro = action.payload;
            },
            updateTime(state, action) {
                state.lastUpdate = action.payload;
            },
            ...config.reducers
        }
    });

    const { fetchStarted, fetchSucess, fetchFail, updateTime } = slice.actions;

    const asyncActions = (payload) => async (dispatch, getState) => {
        const { lastUpdate, cache } = getState()[slice.name];

        if (lastUpdate > Date.now() - cache) return;

        try {
            dispatch(fetchStarted());

            const { url, options } = config.fetchConfig(payload);

            const response = await fetch(url, options);
            const dados = await response.json();

            dispatch(updateTime(Date.now()));

            return dispatch(fetchSucess(dados));
        } catch (erro) {
            dispatch(fetchFail(erro.message));
        }
    }

    return {...slice, asyncActions};
};

export default createAsyncSlice;
