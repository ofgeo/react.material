import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SubComponent from './SubComponent'

import {Button} from '@react.material/button/index'
import {Ripple} from '@react.material/ripple/index'

class App extends Component {


    render() {
        const space = {
            margin: '10px'
        };
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div style={space}>
                    <Button>Flat Button</Button>
                </div>

                <div style={space}>
                    <Ripple>
                        <SubComponent/>
                    </Ripple>
                </div>

                <div style={space}>
                    <Ripple>
                        <div style={{padding:10}}>Just a div</div>
                    </Ripple>
                </div>
            </div>
        );
    }


}

export default App;
