import React, {Fragment} from 'react';
import {Checkbox} from '@react.material/checkbox/es6'
import ComponentDoc from './shared/ComponentDoc';

export default class extends ComponentDoc {
  demo() {
    return (
        <Fragment>
          <div>
            <Checkbox/>
          </div>
        </Fragment>
    )
  }

  title() {
    return "Button";
  }

  packageName() {
    return "@react.material/checkbox";
  }
}