const defaultState = {
    imdb: []
}

export default function MovieDetailReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch(type) {
        case 'UPDATE_IMDB': {
            return {
                ...state,
                imdb: payload.imdb,
            }
        }

        default: {
            return state;
        }
    }
}