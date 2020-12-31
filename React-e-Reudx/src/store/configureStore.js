import { combineReducers, configureStore } from "@reduxjs/toolkit";
import data from "./data.js";

const reducer = combineReducers({ data });
const store = configureStore({ reducer });

export default store;
