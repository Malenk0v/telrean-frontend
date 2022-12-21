import React from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { baseUrl, navItems } from './utils/constants'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			currentPage: navItems[0],
			nameHero: '',
		}
	}

	changePage = page => {
		if (this.state.currentPage === page) {
			return
		}
		this.setState({ nameHero: '' })
		this.setState({ currentPage: page })
	}

	changeTitleH1 = nameHero => {
		this.setState({ nameHero: nameHero })
	}

	render() {
		return (
			<div>
				<Header changePage={this.changePage} nameHero={this.state.nameHero} />
				<Main
					currentPage={this.state.currentPage}
					changeTitleH1={this.changeTitleH1}
				/>
				<Footer />
			</div>
		)
	}
}

export default App
