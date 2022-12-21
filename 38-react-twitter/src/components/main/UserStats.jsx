import React from 'react';
import Avatar from "../ui/avatar/Avatar";
import {TwitterContext} from "../utils/context";

const UserStats = () => {
    return (
    <TwitterContext.Consumer>
        { (value) => (
            <div className={'user-stats'}>
                <div>
                    <Avatar/>
                    <p>{value.user.name}</p>
                </div>
                <div className={'stats'}>
                    <div>
                        Followers: {value.stats.followers}
                    </div>
                    <div>
                        Following: {value.stats.following}
                    </div>
                </div>
            </div>
        )}
    </TwitterContext.Consumer>
    );
};

export default UserStats;