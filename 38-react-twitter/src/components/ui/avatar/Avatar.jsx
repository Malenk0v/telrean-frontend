import React from 'react';
import {TwitterContext} from "../../utils/context";

const Avatar = ({size}) => {
    return (
        <TwitterContext.Consumer>
            {(value) => (
                <img
                    className={`user-avatar ${size ?? ''}`}
                    onClick={() => {
                        const  url = prompt("url")
                        value.changeAvatar(url);
                    }}
                    src={value.user.avatar}
                    alt={value.user.name}/>
            )}
        </TwitterContext.Consumer>
    );
};

export default Avatar;