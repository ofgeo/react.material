import React from "react";
import Loadable from 'react-loadable';
// import {LinearProgress} from '@react.material/linear-progress/es6'

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
    return null;
  }
};

export default function asyncComponent(importComponent) {
  const LoadableComponent = Loadable({
    loader: importComponent,
    loading: LoadingComponent,
    render(loaded, props) {
      let Component = loaded.default;
      return <main><Component {...props}/></main>;
    },
    delay: 5000, // 0.3 seconds
  });

  return function() {
    return <LoadableComponent/>;
  };
}

