import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "data",
    initialState: {
        dadosForm: {

        }
    },
    reducers: {
        adicionarDatas(state, action) {
            state.dadosForm = action.payload;
        }
    }
});

export const { adicionarDatas } = slice.actions;
export default slice.reducer;
