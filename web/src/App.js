import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Checkbox} from '../../packages/checkbox'
import {Button as Button2} from '@react.material/button'

class App extends Component {
    state = {
        disabled: false
    };

    onCheckedChanged(e) {
        this.setState({disabled: !e.target.checked})
    }

    render() {
        const {disabled} = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>
                    <Checkbox defaultChecked={!this.state.disabled}
                              onChange={this.onCheckedChanged.bind(this)}
                              id={"checkbox"}/>
                </div>
                <div>
                    <Button id={'button'} disabled={disabled}>Press Me</Button>
                    <Button2 id={'button'} disabled={disabled}>Press Me</Button2>
                </div>
            </div>
        );
    }
}

export default App;
