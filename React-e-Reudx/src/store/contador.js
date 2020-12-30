import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "contador",
    initialState: {
        total: 0
    },
    reducers: {
        incrementar(state) {
            state.total++;
        },
        reduzir(state) {
            state.total--;
        },
        somar: {
            reducer: (state, action) => state + action.payload,
            prepare: (payload) => ({ payload, meta: "local" })
        }
    }
});

export const { incrementar, reduzir, somar } = slice.actions;
export default slice.reducer;
