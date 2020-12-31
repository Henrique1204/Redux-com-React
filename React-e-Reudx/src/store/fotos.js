import createAsyncSlice from "../util/createAsyncSlice";

const fotos = createAsyncSlice({
    name: "fotos",
    initialState: {
        lista: [],
        pages: 0,
        infinite: true
    },
    reducers: {
        addPhotos(state, action) {
            state.lista.push(...action.payload);
            state.pages++;

            if (action.payload.length === 0) state.infinite = false;
        },
        removePhotos(state) {
            state.lista = [];
            state.pages = 0;
            state.infinite = true;
            state.dados = null;
        }
    },
    fetchConfig: (page = 1) => ({
        url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
        options: {
            method: "GET",
            cache: "no-store"
        }
    })
});

export const { addPhotos, removePhotos } = fotos.actions;

export const fetchFotos = fotos.asyncActions;

export const loadNewPhotos = (page = 1) => async (dispatch) =>  {
    const { payload } = await dispatch(fetchFotos(page));
    dispatch(addPhotos(payload));
};

export default fotos.reducer;
