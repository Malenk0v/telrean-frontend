import React from 'react';
import {friends} from "../utils/constants";
import DreamTeamFullShow from "./DreamTeamFullShow";
import DreamTeamHeroShow from "./DreamTeamHeroShow";

class DreamTeam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            changeFriend: -1
        }
    }

    changeFriend = src => {
        (this.state.changeFriend === -1)
            ? this.setState({changeFriend: src})
            : this.setState({changeFriend: -1});
    }


    render() {
        return (
            (this.state.changeFriend === -1)
                ? <DreamTeamFullShow linkFriends={friends} changeFriend={this.changeFriend}/>
                : <DreamTeamHeroShow linkFriend={this.state.changeFriend} changeFriend={this.changeFriend}/>
        );
    }
};

export default DreamTeam;