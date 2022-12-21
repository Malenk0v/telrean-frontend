import React from 'react';
import style from './Game.module.css'
import {fullCardDeck, result} from "../../utils/constsnts";

class Game extends React.Component {

    constructor(props) {
        super(props);


        this.state = {

            cardDeck: [...fullCardDeck],
            cardComputer: [null, null],
            cardPlayer: [null, null],
            score: {
                computer: 0,
                player: 0,
                resultGame: null,
            }
        }
    }

    //методы для игры
    randomCard = () => {
        return Math.floor(Math.random() * this.state.cardDeck.length)
    }
    getCard = (index) => {
        const card = this.state.cardDeck[index][0];
        const cardValue = this.state.cardDeck[index][1];
        return [card, cardValue]
    }
    giveСards = (index1, index2) => {
        //даем карту компьютеру
        const cardComputer = this.getCard(index1);

        //даем карту игроку
        const cardPlayer = this.getCard(index2);

        this.setState({
            cardComputer: cardComputer,
            cardPlayer: cardPlayer,
        })

        return [cardComputer, cardPlayer]
    }
    deleteCard = (index1, index2) => {
        const arrayTemp = [...this.state.cardDeck];

        //меняем местами элементы сдвигаем наши два эл. в конец
        arrayTemp[index1] = (arrayTemp[arrayTemp.length - 1])
        arrayTemp[index2] = (arrayTemp[arrayTemp.length - 2])
        //удаляем последние два элемента из массва
        arrayTemp.pop()
        arrayTemp.pop()

        this.setState({cardDeck: [...arrayTemp]})
    }
    score = (computer, player) => {
        const cardComputer = computer[1];
        const cardPlayer = player[1];

        let scoreComputer = this.state.score.computer;
        let scorePlayer = this.state.score.player;

        if (cardPlayer > cardComputer) {
            scorePlayer += cardComputer + cardPlayer;
        }
        if (cardComputer > cardPlayer) {
            scoreComputer += cardComputer + cardPlayer;
        }


        const result = this.resultGame(scoreComputer,scorePlayer);

        this.setState({
            score: {
                computer: scoreComputer,
                player: scorePlayer,
                resultGame: result
            }
        })
        return [scoreComputer, scorePlayer, result]
    }
    resultGame = (pcScore, plScore) => {
        let result = "Draw";
        if (plScore > pcScore) {
            result = "Win";
        }
        if (pcScore > plScore) {
            result = "Lose";
        }
        if (plScore === pcScore) {
            result = "Draw";
        }

        return result;
    }


    //логика игры
    match = () => {
        //если в колоде есть карты играем , если нет показываем компонет result
        if (this.state.cardDeck.length > 0) {
            //получаем радномные индексы карт в колоде
            const index = [this.randomCard(), this.randomCard()];

            //Выдаем карты игрокам
            const cards = this.giveСards(index[0], index[1]);
            //Удаляем карты из колоды
            this.deleteCard(index[0], index[1]);

            //Обновляем информацию о счете
            this.props.changeResultGame(this.score(cards[0], cards[1]))
        } else {
            this.props.changePage(result);
        }
    }


    render() {
        const namePlayer = this.props.name || "Guest";
        return (
            <div className="container">
                <div className={`row col-12 p-0`}>
                    <div className={`col-6`}>
                        <div className={style.windowGame}>
                            <h5>Bot</h5>
                            <div className={`text-center p-0 m-0`}>
                                <div className={style.card}>
                                    <p>{this.state.cardComputer[0]}</p>
                                    <p className={`h1`}>{this.state.cardComputer[1]}</p>
                                </div>
                                <div className={style.card}>
                                    <p>{this.state.cardPlayer[0]}</p>
                                    <p className={`h1`}>{this.state.cardPlayer[1]}</p>
                                </div>
                            </div>
                            <h5>{namePlayer}</h5>
                        </div>
                        <button className={`btn btn-primary mb-2 col-12`}
                                onClick={() => this.match()}>next
                        </button>
                    </div>
                    <div className={`col-6 m-auto text-center ${style.infoBar}`}>
                        <h5 className={style.title}>INFO BAR</h5>
                        <p>cards: {this.state.cardDeck.length}
                            <br/>
                            {`Bot ${this.state.score.computer}`} / {`${this.state.score.player} ${this.props.name || "Guest"}`}
                            <br/>
                            {this.state.score.resultGame}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

};

export default Game;