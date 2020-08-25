import axios from 'axios';

export const getJokes = (query) =>  axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`);

export const getRandomJoke = () => axios.get('https://api.chucknorris.io/jokes/random');