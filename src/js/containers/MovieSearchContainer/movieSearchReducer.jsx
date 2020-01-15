const defaultState = {
    input: '',
    movie: [],
}

export default function MovieSearchReducer(state = defaultState, action){
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_INPUT': {
            return {
                ...state,
                input: payload.input,
            }
        }

        case 'SUBMIT_INPUT': {
            return {
                ...state,
                movie: payload.movie,
                input: '',
            }
        }

        default: {
            return state;
        }
    }
    
}