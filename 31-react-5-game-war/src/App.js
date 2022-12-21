import React from 'react';
import Start from "./componets/Start/Start";
import {start, game, result} from "./utils/constsnts";
import Game from "./componets/Game/Game";
import './App.css'
import Result from "./componets/Result/Result";


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: start,
            name: null,
            score: {
                computer: 0,
                player: 0,
                resultGame: "Draw",
            }
        }

    }
    changeResultGame = result =>{
        this.setState({
            score: {
                computer: result[0],
                player: result[1],
                resultGame: result[2]
            }
        })
    }
    changePage = page => {
        this.setState({page});
    }
    changeName = name => {
        this.setState({name});
    }


    render() {
        const name = this.state.name
        const page = this.state.page
        switch (page) {
            case game:
                return (<Game name={name}
                              changeResultGame={this.changeResultGame}
                              changePage={this.changePage}/>)
            case result:
                return (<Result changePage={this.changePage}
                                name={name}
                                resultGame={this.state.score}/>)
            default:
                return (<Start changeName={this.changeName}
                               changePage={this.changePage}/>)
        }

    }
};

export default App;