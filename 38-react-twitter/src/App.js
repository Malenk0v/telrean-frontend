import './App.css';
import Nav from "./components/header/Nav";
import Body from "./components/main/Body";
import React from 'react'
import {TwitterContext} from "./components/utils/context";

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            user: {
                avatar: "https://www.gravatar.com/avatar/0?d=monsterid",
                name: "Monster"
            },
            stats:{
                followers: 100,
                following: 300,
            }
        }
    }

    changeAvatar = url =>{
        const user = {...this.state.user};
        user.avatar = url || user.avatar;
        this.setState({user});
    }

    render() {
        return (
            <div className={'app'}>
                <TwitterContext.Provider value={{
                    stats: this.state.stats,
                    user: this.state.user,
                    changeAvatar: this.changeAvatar
                }}>
                    <Nav/>
                    <Body/>
                </TwitterContext.Provider>
            </div>
        );
    }
}

export default App;
