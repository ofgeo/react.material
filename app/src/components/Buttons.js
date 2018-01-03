import React, {Fragment} from 'react';
import {Button, FlatButton} from '@react.material/button/es6'
import ComponentDoc from './shared/ComponentDoc';

export default class extends ComponentDoc {

  demo() {
    const style = {
      margin: "8px",
      display: "inline-block"
    };
    return (
        <Fragment>
          <div style={style}>
            <Button>Click Me</Button>
          </div>
          <div style={style}>
            <FlatButton>Click Me</FlatButton>
          </div>
        </Fragment>
    )
  }

  title() {
    return "Button"
  }

  packageName() {
    return "@react.material/button"
  }
}