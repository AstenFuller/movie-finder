export function getImdb(imdb) {
    return {
        type: 'UPDATE_IMDB',
        payload: { imdb }
    }

}