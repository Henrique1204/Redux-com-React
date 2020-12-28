const initialState = {
    loading: false,
    dados: null,
    erro: null
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_STARTED": return { ...state, loading: true };
        case "FETCH_SUCESS": return { loading: false, dados: action.payload, erro: null };
        case "FETCH_FAIL": return { loading: false, dados: null, erro: action.payload }
        default: return state;
    }
}

// Middleware pra testar se o valor do dispatch é um função.
const thunk = (store) => (next) => (action) => {
    if (typeof action === "function") {
        return action(store.dispatch);
    }

    return next(action);
}

const { applyMiddleware, compose } = Redux;

// Para poder adicionar mais de um middleware é preciso "compor" eles.
// A extenão do navegador já é um middleware e vem com uma função para compor nativa.
// A comparação "||" é para garantir que só use ela caso esteja instalada, no caso de não estar, utiliza a função do Redux.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Cria o middleware no Redux.
const enchancer = composeEnhancers(applyMiddleware(thunk));
// Adiciona o middleware na hora de criar a store.
const store = Redux.createStore(reducer, enchancer);

// Function creator para efeitos colaterais.
function fetchUrl(url) {
    return async (dispatch) => {
        try {
            dispatch({ type: "FETCH_STARTED" })
            const dados = await fetch(url).then((r) => r.json());
            dispatch({ type: "FETCH_SUCESS", payload: dados });
        } catch (erro) {
            dispatch({ type: "FETCH_FAIL", payload: erro.message })
        }
    }
}

store.dispatch(fetchUrl('https://dogsapi.origamid.dev/json/api/photo'));
