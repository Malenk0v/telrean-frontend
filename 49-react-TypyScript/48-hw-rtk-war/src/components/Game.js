import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { draw, lose, win } from '../reducers/gameReducer';
import { changePage } from '../reducers/userReducer';
import { creatDeck, result } from '../utils/contants';

const Game = () => {
  const [compCard, setCompCard] = useState('Computer card');
  const [playerCard, setPlayerCard] = useState('Player card');
  const dispatch = useDispatch();
  const name = useSelector(state => state.user.name);

  const compDeck = useRef([]);
  const playerDeck = useRef([]);
  const compWin = useRef(0);
  const playerWin = useRef(0);

  const handleClickNext = () => {
    if (playerDeck.current.length) {
      const comp = compDeck.current.pop();
      const player = playerDeck.current.pop();
      if (comp.rank > player.rank) {
        compWin.current++;
      }
      if (comp.rank < player.rank) {
        playerWin.current++;
      }
      setCompCard(`${comp.rank}, ${comp.suit}`)
      setPlayerCard(`${player.rank}, ${player.suit}`);
    } else {
      dispatch(changePage(result));
      if(compWin.current < playerWin.current){
        dispatch(win());
      }
      if(compWin.current > playerWin.current){
        dispatch(lose());
      }
      if(compWin.current === playerWin.current){
        dispatch(draw());
      }
    }

  }

  useEffect(() => {
    const deck = creatDeck();
    deck.sort(() => Math.random() - 0.5);
    compDeck.current = deck.slice(0, deck.length / 2);
    playerDeck.current = deck.slice(deck.length / 2, deck.length);
    handleClickNext();
  }, []);

  return (
    <div>
      <h2>Computer ({compWin.current})</h2>
      <p>{compCard}</p>
      <p>{playerCard}</p>
      <h2>{name} ({playerWin.current})</h2>
      <button onClick={handleClickNext}>Next</button>
    </div>
  )
}

export default Game