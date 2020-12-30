import { combineReducers } from "@reduxjs/toolkit";
import createAsyncSlice from "../util/createAsyncSlice.js";

const token = createAsyncSlice({
    name: "token",
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

const reducer = combineReducers({ token: token.reducer, user: user.reducer });
export default reducer;
