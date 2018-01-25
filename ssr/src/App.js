import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import asyncComponent from './AsyncComponent';
import Loadable from 'react-loadable';

const LoadingComponent = (props) => {
  if (props.error) {
    // When the loader has errored
    return <div>Error!</div>;
  } else if (props.timedOut) {
    // When the loader has taken longer than the timeout
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    // When the loader has taken longer than the delay
    return <div>Loading...</div>;
  } else {
    // When the loader has just started
    return <div>Loading...</div>;
  }
};

const LoadableHome = Loadable({
  loader: () => import('./components/Hello'),
  loading: LoadingComponent,
  // render(loaded, props) {
  //   let Component = loaded.default;
  //   return <main><Component {...props}/></main>;
  // },
  // delay: 5000, // 0.3 seconds
});

class App extends Component {
  render() {
    return (
        <div>
          {/*<div><Link to="/">Home</Link></div>*/}
          {/*<div><Link to="async1">Async1</Link></div>*/}
          {/*<div><Link to="async2">Async2</Link></div>*/}
          <Switch>
            <Route exact path="/" component={LoadableHome}/>
            <Route path="/async1"
                   component={asyncComponent(() => import('./components/Async'))}/>
            <Route path="/async2"
                   component={asyncComponent(() => import('./components/Async2'))}/>
          </Switch>
        </div>);
  }
}

export default App;


