import createAsyncSlice from "./util/createAsyncSlice";

const slice = createAsyncSlice({
    name: "fotos",
    fetchConfig: () => ({
        url: "https://dogsapi.origamid.dev/json/api/photo/?_page=1&_total=6&_user=0",
        options: {
            method: "GET",
            cache: "no-store"
        }
    })
});

export const fetchFotos = slice.asyncActions;
export default slice.reducer;
