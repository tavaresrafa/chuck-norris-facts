import React, { createContext, useState } from 'react';
import { getJokes, getRandomJoke } from '../services/index';

export const JokeContext = createContext();

export const JokeProvider = ({ children }) => {
  const jokesNumberToShow = 10;
  const [query, setQuery] = useState('');
  const [jokes, setJokes] = useState([]);
  const [jokesToShow, setJokesToShow] = useState([]);
  const [randomJoke, setRandomJoke] = useState({});
  const [handleError, setHandleError] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [showSeeMoreButton, setShowSeeMoreButton] = useState(false);

  const handleDefaultSearch = () => {
    setIsFetching(true);
       
    getJokes(query).then((response) => {
      setJokes(response.data.result);
      setJokesToShow(response.data.result.slice(0, jokesNumberToShow));
      setIsFetching(false);
      setShowSeeMoreButton(true);

      if (response.data.total === 0) {
        setIsFetching(false);
        setShowSeeMoreButton(false);
        setHandleError('There is no such word in the vast universe of Chuck Norris');
      }
    })
    .catch((error) => {
      if (error.response.status === 400) {
        setIsFetching(false);
        setShowSeeMoreButton(false);
        setHandleError('Your search must be between 3 and 120 characters');
      }
    })

    cleanCards();
  }

  const handleRandomSearch = () => {
    setIsFetching(true);

    getRandomJoke().then((response) => {
      setRandomJoke(response.data);
      setIsFetching(false);
    })
    .catch((error) => console.log(error))

    cleanCards();
    setShowSeeMoreButton(false);
  }

  const handleSearchOnEnterPressed = (e) => {
    if (e.keyCode === 13) {
      handleDefaultSearch();
    }
  }

  const cleanCards = () => {
    setJokes([]);
    setRandomJoke({});
    setJokesToShow([]);
    setHandleError();
  }

  const addMoreJokes = () => {
    setJokesToShow(jokes.slice(0, jokesToShow.length + jokesNumberToShow));
  }

  return (
    <JokeContext.Provider
      value={{
        randomJoke,
        isFetching,
        jokesToShow,
        handleError,
        showSeeMoreButton,
        setQuery,
        setJokes,
        addMoreJokes,
        handleRandomSearch,
        handleDefaultSearch,
        handleSearchOnEnterPressed,
      }}
    >
      {children}
    </JokeContext.Provider>
  )
}
