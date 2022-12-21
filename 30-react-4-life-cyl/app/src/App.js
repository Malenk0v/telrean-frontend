import './App.css';
import React from 'react';
import {base_url} from "./utils/constants";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoadings: true,
            imgUrl: '',
            name: ''
        }
    }

    componentDidMount() {
        fetch(`${base_url}/v1/peoples/82`)
            .then(res => res.json())
            .then(data => this.setState({
                isLoadings: false,
                imgUrl: `${base_url}/${data.image}`,
                name: data.name
            }))

    }

    render() {
        if (this.state.isLoadings) {
            return (<div className='spinner-border text-primary'></div>)
        } else {
            return (
                <div>
                    <h1>Name: {this.state.name}</h1>
                    <img src={this.state.imgUrl} alt={this.state.name}/>
                </div>
            );
        }
    }
}

export default App;
