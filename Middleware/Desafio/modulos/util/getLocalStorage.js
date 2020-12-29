const getLocalStorage = (key, initial) => {
    try {
        return JSON.parse(window.localStorage.getItem(key));
    } catch (erro) {
        return initial;
    }
}

export default getLocalStorage;
