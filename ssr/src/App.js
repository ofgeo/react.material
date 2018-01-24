import React, {Component} from 'react';
import Hello from './components/Hello';
import {Link, Switch, Route} from 'react-router-dom';
import asyncComponent from './AsyncComponent';

class App extends Component {
  render() {
    return (
        <div>
          <div><Link to="/">Home</Link></div>
          <div><Link to="async1">Async1</Link></div>
          <div><Link to="async2">Async2</Link></div>
          <Switch>
            <Route exact path="/" component={Hello}/>
            <Route path="/async1"
                   component={asyncComponent(() => import('./components/Async'))}/>
            <Route path="/async2"
                   component={asyncComponent(() => import('./components/Async2'))}/>
          </Switch>
        </div>);
  }
}

export default App;
