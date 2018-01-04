import React, {Fragment} from 'react';
import {Button, FlatButton} from '@react.material/button/es6'
import ComponentDoc from './shared/ComponentDoc';

export default class extends ComponentDoc {

  demo() {
    return (
        <Fragment>
          <li>
            <Button>Click Me</Button>
          </li>
          < li>
            <FlatButton>Click Me</FlatButton>
          </li>
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