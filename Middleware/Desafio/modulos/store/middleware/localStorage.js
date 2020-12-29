const localStorage = ({ dispatch, getState }) => (next) => (action) => {
    const results = next(action);

    if (action.localStorage !== undefined) {
        window.localStorage.setItem(action.localStorage, JSON.stringify(action.payload));
    }

    return results;
}

export default localStorage;
