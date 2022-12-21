import React from 'react';
import {baseUrl} from "../utils/constants";

class ListHero extends React.Component{

    constructor(props) {
        super(props);

        this.state ={
            objHero: "",
        }
    }

    componentDidMount() {
        fetch(`${baseUrl}/v1/peoples`)
            .then(res => res.json())
            .then(data => this.setState({objHero: data}))
    }

    render() {
        if (this.state.objHero) {
            return (
                <ul style={{display: "flex", flexDirection: "column"}}>
                    {this.state.objHero.map(date => <li className={"btn btn-outline-warning"} onClick={()=> this.props.getId(date.id)} key={date.id}>{date.name}</li>)}
                </ul>
            )
        } else {
            return <div>Loading</div>
        }
    }
};

export default ListHero;