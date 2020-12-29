import getLocalStorage from "../util/getLocalStorage.js";

// Tipos.
const TOKEN_FETCH_STARTED = "token/FETCH_STARTED";
const TOKEN_FETCH_SUCESS = "token/FETCH_SUCESS";
const TOKEN_FETCH_FAIL = "token/FETCH_FAIL";

// action create.
const tokenFetchStarted = () => ({ type: TOKEN_FETCH_STARTED });
const tokenFetchSucess = (payload) => ({ type: TOKEN_FETCH_SUCESS, payload, localStorage: "token" });
const tokenFetchFail = (payload) => ({ type: TOKEN_FETCH_FAIL, payload });

export const tokenFetch = (user) => async (dispatch) => {
    try {
        dispatch(tokenFetchStarted());

        const response = await fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        const { token } = await response.json();
        dispatch(tokenFetchSucess(token));
    } catch (erro) {
        dispatch(tokenFetchFail(erro.message));
    }
}

// Estado inicial.
const initialState = {
    loading: false,
    dados: getLocalStorage("token", null),
    erro: null
}

// Reducer.
function token(state = initialState, action) {
    switch (action.type) {
        case TOKEN_FETCH_STARTED: return { ...state, loading: true };
        case TOKEN_FETCH_SUCESS: return { dados: action.payload, loading: false, erro: null };
        case TOKEN_FETCH_SUCESS: return { dados: null, loading: false, erro: action.payload };
        default: return state;
    }
}

export default token;
