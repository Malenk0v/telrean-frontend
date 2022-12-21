import React, { useEffect, useState } from 'react';
import styles from "../css_modules/aboutMe.module.css";
import { base_url, periodMonth } from "../utils/constants";

const AboutMe = props => {
  const [state, setState] = useState({});

  useEffect(() => {
    let hero = JSON.parse(localStorage.getItem('hero'));
    if (!hero || (Date.now() - hero.time) > periodMonth) {
      fetch(`${base_url}/v1/peoples/1`)
        .then(response => response.json())
        .then(data => {
          let info = {
            "name": data.name,
            "height": data.height,
            "mass": data.mass,
            "hair_color": data.hair_color,
            "skin_color": data.skin_color,
            "eye_color": data.eye_color,
            "birth_year": data.birth_year,
            "gender": data.gender
          };
          setState({ hero: info });
          hero = {
            payload: info,
            time: Date.now()
          };
          localStorage.setItem('hero', JSON.stringify(hero));
        });
    } else {
      setState({ hero: hero.payload });
    }
    return () => console.log('Component AboutMe unmounted');
  }, [])

  return (
    <div>
      {(state.hero) &&
        <div className={`farGalaxy ${styles.hero_box}`}>
          <p><span className={styles.hero_titles}>name:</span> {state.hero.name}</p>
          <p><span className={styles.hero_titles}>height:</span> {state.hero.height}</p>
          <p><span className={styles.hero_titles}>birth year:</span> {state.hero.birth_year}</p>
          <p><span className={styles.hero_titles}>gender:</span> {state.hero.gender}</p>
          <p><span className={styles.hero_titles}>mass:</span> {state.hero.mass}</p>
          <p><span className={styles.hero_titles}>hair color:</span> {state.hero.hair_color}</p>
          <p><span className={styles.hero_titles}>skin color:</span> {state.hero.skin_color}</p>
          <p><span className={styles.hero_titles}>eye color:</span> {state.hero.eye_color}</p>
        </div>
      }
    </div>
  )


}

export default AboutMe;