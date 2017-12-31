import React, {Component} from 'react';
import Layout from './shared/Layout'
import {Button, FlatButton} from '@react.material/button/es6'
import './shared/style.css'
import * as CodeMirror from 'codemirror-minified'
import 'codemirror-minified/lib/codemirror.css'
import 'codemirror-minified/theme/mbo.css'
import 'codemirror-minified/mode/shell/shell'

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
          <div ref={(code) => this.code = code} style={{height:"auto"}}>
          </div>
        </Layout>
    )
  }

  componentDidMount() {
    CodeMirror(this.code, {
      theme: "mbo",
      readOnly: true,
      value: "npm install --save @material/animation",
      mode: "shell"
    });
  }
}