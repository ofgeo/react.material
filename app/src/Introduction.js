import React, {Component} from 'react';
import Layout from './components/shared/Layout'
import * as CodeMirror from 'codemirror-minified'
import 'codemirror-minified/lib/codemirror.css'
import 'codemirror-minified/theme/mbo.css'
import 'codemirror-minified/theme/dracula.css'
import 'codemirror-minified/mode/javascript/javascript'

import './introduction.css'

export default class extends Component {
  render() {
    return (
        <Layout title="React">
          <h1>Getting start</h1>

          <h2>Installation</h2>
          <div ref={(npm) => this.npm = npm} style={{height: "auto"}}/>
          <div ref={(yarn) => this.yarn = yarn}
               style={{height: "auto", marginTop: "8px"}}/>

          <h3>Installing individual components</h3>
          <div ref={(node) => this.npm2 = node} style={{height: "auto"}}/>
          <div ref={(node) => this.yarn2 = node}
               style={{height: "auto", marginTop: "8px"}}/>

          <h2>Including Components</h2>
          <div ref={(node) => this.import = node}
               style={{height: "auto", marginTop: "8px"}}/>
          <h3>Individual Components</h3>
          <div ref={(node) => this.importIndividual = node}
               style={{height: "auto", marginTop: "8px"}}/>

          <h5 style={{marginTop: "50px"}}>
            Note: this is still under development.
          </h5>
        </Layout>
    )
  }

  componentDidMount() {
    CodeMirror(this.npm, {
      theme: "mbo",
      readOnly: true,
      value: "npm install --save @react.material/components",
    });

    CodeMirror(this.yarn, {
      theme: "mbo",
      readOnly: true,
      value: "yarn add @react.material/components",
    });

    CodeMirror(this.npm2, {
      theme: "mbo",
      readOnly: true,
      value: "npm install --save @react.material/button @react.material/checkbox @react.material/ripple",
    });

    CodeMirror(this.yarn2, {
      theme: "mbo",
      readOnly: true,
      value: "yarn add @react.material/button @react.material/checkbox @react.material/ripple",
    });

    CodeMirror(this.import, {
      theme: "dracula",
      readOnly: true,
      value: "import {Button, Checkbox, Ripple} from '@react.material/components';",
      mode: "javascript"
    });

    CodeMirror(this.importIndividual, {
      theme: "dracula",
      readOnly: true,
      value: "import {Button} from '@react.material/button';",
      mode: "javascript"
    });
  }
}