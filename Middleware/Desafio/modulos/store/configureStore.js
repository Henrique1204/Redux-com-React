import thunk from "./middleware/thunk.js";
import localStorage from "./middleware/localStorage.js";
import token from "./token.js";
import user from "./user.js";

// Extraíndo o que iremos usar do Redux;
const { createStore, combineReducers, compose, applyMiddleware } = Redux;
// Compondo os Middleware e habilitando o Devtools do Redux.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage))
// Combinando os reducers em um.
const reducer = combineReducers({ token, user })
// Criando a store passando os reducers combinados.
const store = createStore(reducer, enhancer);

export default store;
