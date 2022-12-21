import React from 'react';
import style from './Start.module.css'
import {game} from "../../utils/constsnts";

const Start = ({changePage, changeName}) => {
    return (
        <div className="container">
            <h1 className={style.h1}>Ready for WAR</h1>
            <input type="text"
                   placeholder={"Enter your name"}
                   onChange={ e => changeName(e.target.value)}/>
            <button className={`btn btn-primary`}
                    onClick={() => changePage(game)}>start</button>
        </div>
    );
};

export default Start;