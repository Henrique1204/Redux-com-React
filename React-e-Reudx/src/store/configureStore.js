import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fotos from "./fotos.js";

const reducer = combineReducers({ fotos });
const store = configureStore({ reducer });

export default store;
