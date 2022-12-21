import React from 'react';
import { useSelector } from 'react-redux';
import Game from './components/Game';
import Result from './components/Result';
import Start from './components/Start';
import { game, result } from './utils/contants';

const App = () => {
  const page = useSelector(state => state.user.page);

  switch (page) {
    case game:
      return <Game />;
    case result:
      return <Result />
    default:
      return <Start />
  }
}

export default App;
