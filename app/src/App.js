import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import SubComponent from './SubComponent'

import {Button, FlatButton} from '@react.material/button/index'
import {Ripple} from '@react.material/ripple/index'
import {Checkbox} from '@react.material/checkbox/index'

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
                <div style={space}>
                    <Checkbox/>
                </div>

                <div style={space}>
                    <Button>Button</Button>
                </div>

                <div style={space}>
                    <FlatButton>Flat Button</FlatButton>
                </div>

                <div style={space}>
                    <Ripple unbounded>
                        <div className={'mdc-ripple-is-unbounded'} style={{padding: 10}}>Ripple</div>
                    </Ripple>
                </div>
            </div>
        );
    }


}

export default App;
