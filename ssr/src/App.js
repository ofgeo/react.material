import React, {Component} from 'react';
import Something from './Something';
import {Switch,Route} from 'react-router-dom';
import SomethingElse from "./SomethingElse";

class App extends Component {
  render() {
    return (
        <div>
          Hello App!!!
          <Switch>
            <Route exact path="/" component={Something}/>
            <Route path="/else" component={SomethingElse}/>
          </Switch>
        </div>);
  }
}

export default App;
