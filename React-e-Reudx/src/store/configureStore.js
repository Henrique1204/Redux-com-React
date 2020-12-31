import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import localStorage from "./middleware/localStorage.js";
import login from "./login.js";
import fotos from "./fotos.js";

const middleware = [...getDefaultMiddleware(), localStorage];

const reducer = combineReducers({ login, fotos });
const store = configureStore({ reducer, middleware });

export default store;
