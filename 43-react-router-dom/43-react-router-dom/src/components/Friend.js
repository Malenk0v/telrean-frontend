import React, { useContext } from 'react';
import style from '../css_modules/borderRound.module.css';
import { characters, HeroContext } from '../utils/constants';

const Friend = ({ friend, number }) => {
  const { setHero } = useContext(HeroContext);

  let friendStyle = 'col-4 p-1 ';

  if (number === 7) {
    friendStyle += style.bottomLeft;
  }
  if (number === 9) {
    friendStyle += style.bottomRight;
  }
  return (
    <img
      onClick={() => setHero(friend)}
      className={friendStyle}
      src={characters[friend].img}
      alt={characters[friend].name}
    />
  );
};

export default Friend;
