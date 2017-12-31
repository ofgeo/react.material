import React, {Component} from 'react';
import Layout from './shared/Layout'
import {Ripple} from '@react.material/ripple/es6'
import './shared/style.css'

export default class extends Component {
  render() {
    const style = {
      margin: "8px",
      display: "inline-block",
      verticalAlign:"top"
    };
    return (
        <Layout title="Button">

          <div className="demo-block">
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
          </div>


        </Layout>
    )
  }
}