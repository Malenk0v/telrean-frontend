import React, {useState} from 'react';
import Start from "./componets/Start/Start";
import {start, game, result} from "./utils/constsnts";
import Game from "./componets/Game/Game";
import './App.css'
import Result from "./componets/Result/Result";


const App = () => {

		const [state, setState] = useState({
				page: start,
				name: null,
				score: {
						computer: 0,
						player: 0,
						resultGame: "Draw",
				}
		})
		const changeResultGame = result => {
				setState({...state, result})
		}
		const changePage = page => {
				setState({...state, page})
		}
		const changeName = name => {
				setState({...state, name});
		}
		const name = state.name
		const page = state.page

		switch (page) {
				case game:
						return (<Game name={name}
													changeResultGame={changeResultGame}
													changePage={changePage}/>)
				case result:
						return (<Result changePage={changePage}
														name={name}
														resultGame={state.score}/>)
				default:
						return (<Start changeName={changeName}
													 changePage={changePage}/>)
		}

};

export default App;