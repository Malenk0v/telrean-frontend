import React from 'react';
import Home from "./Home";
import Heroes from "./Heroes";
import Contact from "./Contact";
import StarWars from "./StarWars";
import {navItems} from "../utils/constants";
import CubContainer from "./HomeWork/CubContainer";

const Main = (props) => {

    switch (props.currentPage) {
        case navItems[1]:
            return <Heroes changeTitleH1={props.changeTitleH1}/>
        case navItems[2]:
            return <StarWars/>
        case navItems[3]:
            return <Contact/>
        case navItems[4]:
            return <CubContainer/>
        default:
            return <Home/>
    }
}

export default Main;