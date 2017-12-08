import React, {Component} from 'react';
import Layout from './shared/Layout'
import {Button, FlatButton} from '@react.material/button/index'
import './shared/style.css'

export default class extends Component {
  render() {
    const style = {
      margin: "8px",
      display: "inline-block"
    };
    return (
        <Layout title="Button">

          <div className="demo-block">
            <div style={style}>
              <Button>Click Me</Button>
            </div>
            <div style={style}>
              <FlatButton>Click Me</FlatButton>
            </div>
          </div>
        </Layout>
    )
  }
}