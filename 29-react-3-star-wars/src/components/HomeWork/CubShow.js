import React from 'react';
import style from "./cub.module.css";
import CubItem from "./CubItem";

const CubShow = ({color, changeRender}) => {
    const styleDiv = `${style.cubBroder} row  ${style.container}`;
    const sizeCol = 12; // default size bootstrap max width container


    return (
        <div className={styleDiv}>
            <CubItem changeRender={changeRender}
                     sizeCol={sizeCol}
                     color={color}/>
        </div>
    );
};

export default CubShow;