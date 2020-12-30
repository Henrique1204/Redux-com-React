import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "login",
    initialState: {
        token: {
            loading: false,
            dados: null,
            erro: null
        },
        login: {
            loading: false,
            dados: null,
            erro: null
        }
    },
    reducers: {
        fetchTokenStarted(state) {
            state.token.loading = true;
        },
        fetchTokenSucess(state, action) {
            state.token.loading = false;
            state.token.dados = action.payload;
            state.token.erro = null;
        },
        fetchTokenFail(state, action) {
            state.token.loading = false;
            state.token.dados = null;
            state.token.erro = action.payload;
        },
        fetchUserStarted(state) {
            state.login.loading = true;
        },
        fetchUserSucess(state, action) {
            state.login.loading = false;
            state.login.dados = action.payload;
            state.login.erro = null;
        },
        fetchUserFail(state, action) {
            state.login.loading = false;
            state.login.dados = null;
            state.login.erro = action.payload;
        }
    }
});

const {
    fetchTokenStarted,
    fetchTokenSucess,
    fetchTokenFail,
    fetchUserStarted,
    fetchUserSucess,
    fetchUserFail
} = slice.actions;

export const fetchToken = (user) => async (dispatch) => {
    try {
        dispatch(fetchTokenStarted());

        const res = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const dados = await res.json();

        return dispatch(fetchTokenSucess(dados));
    } catch (erro) {
        dispatch(fetchTokenFail);
    }
};

export const fetchUser = (token) => async (dispatch) => {
    try {
        dispatch(fetchUserStarted());

        const res = await fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const dados = await res.json();

        return dispatch(fetchUserSucess(dados));
    } catch (erro) {
        dispatch(fetchUserFail);
    }
};

export const login = (user) => async (dispatch) => {
    try {
        const { payload } = await dispatch(fetchToken(user));

        if (payload.token !== undefined) {
            dispatch(fetchUser(payload.token));
        }
    } catch (erro) {

    }
}

export default slice.reducer;
