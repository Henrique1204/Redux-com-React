import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contador from "./contador.js";
import logger from "./middleware/logger.js";
import modal from "./modal.js";

const middleware = [...getDefaultMiddleware(), logger];

const reducer = combineReducers({ contador, modal });
const store = configureStore({ reducer, middleware });

export default store;
