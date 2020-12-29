import store from "./modulos/store/configureStore.js";
import { tokenFetch } from "./modulos/store/token.js";
import { userFetch } from "./modulos/store/user.js";

async function login (user) {
    let state = store.getState();

    if (state.token.dados === null) {
        await store.dispatch(tokenFetch(user));
        state = store.getState();
    }

    await store.dispatch(userFetch(state.token.dados));
}

login({ username: "dog", password: "dog" });
