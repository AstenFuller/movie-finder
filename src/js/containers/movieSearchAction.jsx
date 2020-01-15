export function updateMovieSearchInput(input) {
    return {
        type: 'UPDATE_INPUT',
        payload: { input }
    }
}

export function submitMovie(movie) {
    return {
        type: 'SUBMIT_INPUT',
        payload: { movie }
    }
}

