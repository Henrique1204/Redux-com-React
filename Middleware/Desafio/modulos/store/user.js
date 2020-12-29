// Tipos.
const USER_FETCH_STARTED = "user/FETCH_STARTED";
const USER_FETCH_SUCESS = "user/FETCH_SUCESS";
const USER_FETCH_FAIL = "user/FETCH_FAIL";

// action create.
const userFetchStarted = () => ({ type: USER_FETCH_STARTED });
const userFetchSucess = (payload) => ({ type: USER_FETCH_SUCESS, payload });
const userFetchFail = (payload) => ({ type: USER_FETCH_FAIL, payload });

export const userFetch = (token) => async (dispatch) => {
    try {
        dispatch(userFetchStarted());

        const response = await fetch("https://dogsapi.origamid.dev/json/api/user", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const dados = await response.json();
        dispatch(userFetchSucess(dados));
    } catch (erro) {
        dispatch(userFetchFail(erro.message));
    }
}

// Estado inicial.
const initialState = {
    loading: false,
    dados: null,
    erro: null
}

// Reducer.
function user(state = initialState, action) {
    switch (action.type) {
        case USER_FETCH_STARTED: return { ...state, loading: true };
        case USER_FETCH_SUCESS: return { dados: action.payload, loading: false, erro: null };
        case USER_FETCH_SUCESS: return { dados: null, loading: false, erro: action.payload };
        default: return state;
    }
}

export default user;
