import React from 'react';
import LandingPage from '../pages/LandingPage';
import { JokeProvider } from '../context/context';
import GlobalStyles from '../styles/global';

const App = () => {
  return (
    <JokeProvider>
      <LandingPage />
      <GlobalStyles />
    </JokeProvider>
  );
}

export default App;
