import { combineReducers } from "@reduxjs/toolkit";
import createAsyncSlice from "../util/createAsyncSlice.js";
import getLocalStorage from "../util/getLocalStorage.js";

const token = createAsyncSlice({
    name: "token",
    initialState: {
        dados: {
            token: getLocalStorage("token", null)
        }
    },
    reducers: {
        fetchSucess: {
            reducer(state, action) {
                state.loading = false;
                state.dados = action.payload;
                state.erro = null;
            },
            prepare(payload) {
                return {
                    payload, meta: {
                        localStorage: {
                            key: "token",
                            value: payload.token
                        }
                    }
                }
            }
        }
    },
    fetchConfig: (user) => ({ 
        url: 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
        options: {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    })
});

const user = createAsyncSlice({
    name: "user",
    fetchConfig: (token) => ({ 
        url: 'https://dogsapi.origamid.dev/json/api/user',
        options: {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    })
});

const fetchToken = token.asyncActions;
const fetchUser = user.asyncActions;

export const login = (user) => async (dispatch) => {
    try {
        const { payload } = await dispatch(fetchToken(user));

        if (payload.token !== undefined) {
            dispatch(fetchUser(payload.token));
        }
    } catch (erro) {

    }
}

export const autoLogin = () => async (dispatch, getState) => {
    const state = getState();
    const { token } = state.login.token.dados;

    if (token) await dispatch(fetchUser(token));
}

const reducer = combineReducers({ token: token.reducer, user: user.reducer });
export default reducer;
