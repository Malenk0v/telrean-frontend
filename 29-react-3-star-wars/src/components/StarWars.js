import React from 'react';
import {starWarsInfo} from "../utils/constants";
import style from '../css_modules/farGalaxy.module.css'

const StarWars = () => {
    return (
        <div>
            <p className={style.farGalaxy}>{starWarsInfo}</p>
        </div>
    );
};

export default StarWars;