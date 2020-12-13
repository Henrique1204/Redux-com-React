const COMPLETAR_AULA = "aulas/COMPLETAR_AULA";
const COMPLETAR_CURSO = "aulas/COMPLETAR_CURSO";
const RESETAR_CURSO = "aulas/RESETAR_CURSO";

export const completarAula = (id) => ({ type: COMPLETAR_AULA, payload: id });
export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = (email) => ({ type: RESETAR_CURSO, payload: email });

const initialState = [
    {
      id: 1,
      nome: 'Design',
      completa: true,
    },
    {
      id: 2,
      nome: 'HTML',
      completa: false,
    },
    {
      id: 3,
      nome: 'CSS',
      completa: false,
    },
    {
      id: 4,
      nome: 'JavaScript',
      completa: false,
    },
];

const reducer = immer.produce((state, action) => {
    switch(action.type) {
        case COMPLETAR_AULA:
            const indice = state.findIndex((x) => x.id === action.payload);
            if (!isNaN(indice) && state[indice]) state[indice].completa = true;
            break;
        case COMPLETAR_CURSO:
            state.forEach((aula) => aula.completa = true);
            break;
        case RESETAR_CURSO: 
            state.forEach((aula) => aula.completa = false);
            break;
    }
}, initialState);

export default reducer;
