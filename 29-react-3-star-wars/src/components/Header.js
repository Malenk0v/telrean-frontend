import React from 'react';
import Navigation from "./Navigation";

const Header = ({changePage,nameHero}) => {

    return (
        <header>
            <Navigation changePage={changePage}/>
            <h1 className="text-center py-4">{nameHero||"Star Wars"}</h1>
        </header>
    );
};

export default Header;