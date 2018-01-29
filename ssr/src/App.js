import React, {Component} from 'react';
import Loadable from 'react-loadable';
import Loading from './components/Loading';

const LoadableHome = Loadable({
  loader: () => import('./components/Hello'),
  loading: Loading,
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
          <LoadableHome/>
        </div>);
  }
}

export default App;


