import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contador from "./contador.js";
// import logger from "./middleware/logger.js";
import localStorage from "./middleware/localStorage.js";
import modal from "./modal.js";
import login from "./login.js";

const middleware = [...getDefaultMiddleware(), localStorage];

const reducer = combineReducers({ contador, modal, login });
const store = configureStore({ reducer, middleware });

export default store;
