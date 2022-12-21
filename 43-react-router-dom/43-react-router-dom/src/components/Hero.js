import React, { useContext } from 'react';
import { characters, HeroContext } from '../utils/constants';

const Hero = () => {
  const { hero } = useContext(HeroContext);
  return (
    <section className="float-start me-3 w-25">
      <img
        className="w-100"
        src={characters[hero].img}
        alt={characters[hero].name}
      />
    </section>
  );
};

export default Hero;
