import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { useState } from 'react';
import { defaultHero, HeroContext } from './utils/constants';

const App = () => {
  const [hero, setHero] = useState(defaultHero);
  console.log(hero);
  return (
    <HeroContext.Provider value={{ hero, setHero }}>
      <div className="container-fluid">
        <Header />
        <Main />
        <Footer />
      </div>
    </HeroContext.Provider>
  );
};

export default App;
