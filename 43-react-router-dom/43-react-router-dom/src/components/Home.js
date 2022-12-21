import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { defaultHero, friends, HeroContext } from '../utils/constants';
import DreamTeam from './DreamTeam';
import FarGalaxy from './FarGalaxy';
import Hero from './Hero';

const Home = () => {
  const { setHero } = useContext(HeroContext);

  let { heroId } = useParams();
  useEffect(() => {
    if (friends.includes(heroId)) {
      setHero(heroId);
    }
  }, [heroId]);
  return (
    <main className="clearfix">
      <Hero />
      <DreamTeam />
      <FarGalaxy />
    </main>
  );
};

export default Home;
