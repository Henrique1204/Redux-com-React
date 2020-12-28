function reducer(state = 0, action) {
    switch(action.type) {
        case "INCREMENTAR": return state + 1;
        case "REDUZIR": return state -1;
        default: return state;
    }
}

// A função que será executada no middleware.
// Ocorre depois do dispatch e antes do Reducer.
const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log(`ACTION: ${action}`);
    console.log(`STATE_ANTERIOR: ${store.getState()}`);
    // Next executa o reducer e retorno a action.
    const result = next(action);
    console.log(`STATE_ATUAL: ${store.getState()}`);
    console.groupEnd();

    // O retorno deve ser uma action por padrão do Redux.
    return result;
};

const { applyMiddleware, compose } = Redux;

// Para poder adicionar mais de um middleware é preciso "compor" eles.
// A extenão do navegador já é um middleware e vem com uma função para compor nativa.
// A comparação "||" é para garantir que só use ela caso esteja instalada, no caso de não estar, utiliza a função do Redux.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Cria o middleware no Redux.
const enchancer = composeEnhancers(applyMiddleware(logger));


// Adiciona o middleware na hora de criar a store.
const store = Redux.createStore(reducer, enchancer);

store.dispatch({ type: "INCREMENTAR" });
