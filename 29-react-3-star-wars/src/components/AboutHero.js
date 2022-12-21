import React from 'react';
import {baseUrl} from "../utils/constants";
import styleBorder from "../css_modules/borderRound.module.css"

class AboutHero extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            heroInfo: {
                id: '',
                name: '',
                gender: '',
                skin_color: '',
                hair_color: '',
                eye_color: "",
                height: '',
                mass: '',
                homeworld: '',
                birth_year: '',
                imageUrl: ''
            }
        }
    }

    componentDidMount() {
        fetch(`${baseUrl}//v1/peoples` + this.props.count)
            .then(response => response.json())
            .then(data => this.setState({
                heroInfo: {
                    id: data.id,
                    name: data.name,
                    gender: data.gender,
                    skin_color: data.skin_color,
                    hair_color: data.hair_color,
                    eye_color: data.eye_color,
                    height: data.height,
                    mass: data.mass,
                    homeworld: data.homeworld,
                    birth_year: data.birth_year,
                    imageUrl: data.image
                }
            }))
            .then(d => this.props.changeTitleH1(this.state.heroInfo.name))
    }

    resetIdAndTitle = () => {
        this.props.getId()
        this.props.changeTitleH1("")
    }


    render() {
        return (

            <div className={`border`} style={{width: "50%", margin: "auto", display: "flex", flexDirection: "column",backgroundColor: " rgba(60, 69, 67, 0.6)"}}>
                <img style={{width: "50%", margin: "auto"}} src={`${baseUrl}/${this.state.heroInfo.imageUrl}`}
                     alt={this.state.heroInfo.name}/>
                <ul style={{listStyleImage: "../Images/starIcon.png"}}>
                    <li>Gender: {this.state.heroInfo.gender}</li>
                    <li>Mass: {this.state.heroInfo.mass}</li>
                    <li>Height: {this.state.heroInfo.height}</li>
                    <li>Birth year: {this.state.heroInfo.birth_year}</li>
                    <li>Eye color: {this.state.heroInfo.eye_color}</li>
                    <li>Hair color: {this.state.heroInfo.hair_color}</li>
                    <li>Skin color: {this.state.heroInfo.skin_color}</li>
                    <li>Home world: {this.state.heroInfo.homeworld}</li>
                </ul>
                <button onClick={() => this.resetIdAndTitle()}
                        className={`btn btn-danger ${styleBorder.bottomLeft}`}>back
                </button>
            </div>
        )
    };
};

export default AboutHero;