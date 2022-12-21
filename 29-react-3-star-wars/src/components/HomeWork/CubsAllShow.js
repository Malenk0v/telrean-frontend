import React from 'react';
import style from "./cub.module.css";
import CubItem from "./CubItem";

const CubsAllShow = (props) => {
    return (
        <div className={`${style.cubBroder}  row  ${style.container}`}>
            {props.cubs.map(item => <CubItem changeRender={props.changeRender}
                                                sizeCol={props.sizeCol}
                                                key={`${item}`}
                                                color={item}/>)}
        </div>
    );
};

export default CubsAllShow;