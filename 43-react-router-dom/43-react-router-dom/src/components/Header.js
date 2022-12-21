import React, { useContext } from 'react';
import { characters, HeroContext } from '../utils/constants';
import Navigation from './Navigation';

const Header = () => {
  const { hero } = useContext(HeroContext);
  return (
    <header>
      <Navigation />
      <h1 className="text-center py-4">{characters[hero].name}</h1>
    </header>
  );
};

export default Header;
