import React from 'react';
import {cubs} from "../../utils/constants";
import CubsAllShow from "./CubsAllShow";
import CubShow from "./CubShow";

class CubContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cubRender: -1,
        }
    }


    /*
       Если цвета совпадают то нужно вернуть default состояние (-1)
       Если нет, то нужно занести в стейт название цвета
     */
    changeRender = cubRender => {

        (cubRender === this.state.cubRender) ?
            this.setState({cubRender: -1})
            :
            this.setState({cubRender})
    }

    render() {
        return (
            (this.state.cubRender === -1) ?
                <CubsAllShow changeRender={this.changeRender} cubs={cubs} sizeCol={6}/>
                :
                <CubShow changeRender={this.changeRender} color={this.state.cubRender}/> //передаю цвет
        )

    }

};

export default CubContainer;