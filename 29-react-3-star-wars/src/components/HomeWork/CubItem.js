import React from 'react';
import style from './cub.module.css'

const CubItem = ({sizeCol, changeRender, color}) => {

    const styleContainerCub = `col-${sizeCol} p-0`;
    const styleCub = `${style.cub} ${style.cubBroder}`;

    return (
        <div className={styleContainerCub}>
            <div onClick={() => changeRender(color)}
                 style={{background: color}}
                 className={`${styleCub}`}>
            </div>
        </div>
    );
};

export default CubItem;