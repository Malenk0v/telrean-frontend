import React from 'react';
import {game} from "../../utils/constsnts";
import style from './Result.module.css'

const Result = ({changePage, resultGame, name}) => {
    return (
        <div className={`container`}>
            <div className={`text-center ${style.infoBar} col-9 `}>
                <h1 className={style.title}>{resultGame.resultGame}</h1>
                <h3>{`Score:`}</h3>
                <h4>{`${(name || "You")} ${resultGame.player} - ${resultGame.computer} Computer`}</h4>
            </div>
            <button className={`btn btn-primary col-9`}
                    onClick={() => changePage(game)}>Again?</button>
        </div>
    );
};

export default Result;