import React, {Component} from "react";
import {LinearProgress} from '@react.material/linear-progress/es6'

export default function asyncComponent(importComponent) {
  return class AsyncComponent extends Component {
    static Component = null;

    state = {
      Component: AsyncComponent.Component
    };

    onComponentReady(component) {
      if (this.mounted) {
        this.setState({Component: component});
      }
    }

    componentWillMount() {
      if (this.state.Component === null) {
        importComponent().then(m => m.default).then(Component => {
          AsyncComponent.Component = Component;
          this.onComponentReady(Component)
        }).catch(e => {
          console.log(e);
          this.onComponentReady(Error)
        });
      }
    }

    componentDidMount() {
      this.mounted = true;
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    render() {
      const {Component} = this.state;
      return Component !== null
          ? <main id="main"><Component {...this.props} /></main>
          : <main><LinearProgress/></main>;
    }
  }
}

const Error = () => (
    <h1>Sorry, please check your internet connection and try again.</h1>
);

