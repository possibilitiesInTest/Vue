import * as types from './mutation-types'


export const initJokes = ({commit}) => {
    fetch('https://official-joke-api.appspot.com/random_ten', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(json => commit(types.INIT_JOKES, json))
    // fetches 10 jokes from the api
}

export const addJoke = ({commit}) => {
    fetch('https://official-joke-api.appspot.com/random_joke', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(json => commit(types.ADD_JOKE, json))
    // fetches 1 joke from the api
}

export const removeJoke = ({commit}, index) => {
    commit(types.REMOVE_JOKE, index)
}
