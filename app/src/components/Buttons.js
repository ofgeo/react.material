import React from 'react';
import {Button, FlatButton} from '@react.material/button/es6'
import ComponentDoc from './shared/ComponentDoc';

export default class extends ComponentDoc {

  demo() {
    return [
      <li>
        <Button>Click Me</Button>
      </li>,
      <li>
        <FlatButton>Click Me</FlatButton>
      </li>
    ]
  }

  title() {
    return "Button"
  }

  packageName() {
    return "@react.material/button"
  }
}