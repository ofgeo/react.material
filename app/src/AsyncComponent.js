import React, {Component} from "react";
import {LinearProgress} from '@react.material/linear-progress/es6'

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentWillMount() {
      const {default: component} = await importComponent();

      if (this.mounted) {
        this.setState({
          component: component
        });
      }
    }

    async componentDidMount() {
      this.mounted = true;
    }

    async componentWillUnmount() {
      this.mounted = false;
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : <LinearProgress/>;
    }

    componentDidCatch(error, info) {
      console.log("componentDidCatch - error:" + error + ", info:" + info);
    }
  }

  return AsyncComponent;
}