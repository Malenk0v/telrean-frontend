import React from 'react';
import {baseUrl} from "../utils/constants";
import AboutHero from "./AboutHero";
import ListHero from "./ListHero";


class Heroes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: ""
        }
    }


    getId = (id) => {
        if (this.state.id) {
            return this.setState({id: ``})
        }
        this.setState({id: `/${id}`})
    }

    render() {
        return (
            (this.state.id)
                ? <AboutHero getId={this.getId} count={this.state.id} changeTitleH1={this.props.changeTitleH1}/>
                : <ListHero getId={this.getId}/>
        )

    }

};

export default Heroes;