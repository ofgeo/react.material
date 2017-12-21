import React, {Component} from 'react';
import './App.css';
import {Ripple} from '@react.material/ripple'

class App extends Component {
    render() {
        return (<div>
            <Ripple>
                <div>Ripple</div>
            </Ripple>
        </div>)
    }
}

export default App;
