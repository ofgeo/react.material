import React, {Fragment} from 'react';
import {Ripple} from '@react.material/ripple/es6'
import './shared/style.css'
import ComponentDoc from './shared/ComponentDoc';

export default class extends ComponentDoc {
  demo() {
    const style = {
      margin: "8px",
      display: "inline-block",
      verticalAlign: "top"
    };
    return (
        <Fragment>
          <div style={style}>
            <Ripple>
              <div style={{padding: "8px"}}>Example 1</div>
            </Ripple>
          </div>
          <div style={style}>
            <Ripple style={{padding: "8px"}}>
              Example 2
            </Ripple>
          </div>
          <div style={style}>
            <Ripple style={{padding: "8px"}}>
              <div style={{paddingTop: "0px"}}>Example Item A</div>
              <div style={{paddingTop: "4px"}}>Example Item B</div>
              <div style={{paddingTop: "4px"}}>Example Item C</div>
              <div style={{paddingTop: "4px"}}>Example Item D</div>
            </Ripple>
          </div>
        </Fragment>
    )
  }

  title() {
    return "Ripple";
  }

  packageName() {
    return "@react.material/ripple";
  }
}