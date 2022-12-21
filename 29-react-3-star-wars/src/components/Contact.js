import React from 'react'
import Form from './Form'
import {baseUrl} from '../utils/constants'


class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            allPlanets: null,
        }
    }

    componentDidMount() {
        fetch(`${baseUrl}/v1/planets`)
            .then(response => response.json())
            .then(data => this.setState({allPlanets: data}))
    }

    render() {
        return(
            (this.state.allPlanets)
                ?<Form allPlanets={this.state.allPlanets}/>
                :<p style={{textAlign: "center"}}>Form lodaindg</p>
        )

    }
}

export default Contact
