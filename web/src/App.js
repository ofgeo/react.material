import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Checkbox} from '@react.material/checkbox'
import {Button} from '@react.material/button'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div><Checkbox id={"checkbox"}/></div>
                <div><Button>Hello Button</Button></div>
            </div>
        );
    }
}

export default App;
