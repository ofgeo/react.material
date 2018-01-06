import React, {Component, Fragment} from 'react';
import {Helmet} from 'react-helmet';
import * as CodeMirror from 'codemirror-minified'
import 'codemirror-minified/lib/codemirror.css'
import 'codemirror-minified/theme/mbo.css'
import 'codemirror-minified/theme/dracula.css'
import 'codemirror-minified/addon/scroll/simplescrollbars'
import 'codemirror-minified/addon/scroll/simplescrollbars.css'
import 'codemirror-minified/mode/javascript/javascript'

import './introduction.css'

export default class extends Component {
  render() {
    return (
        <Fragment>
          <Helmet>
            <title>React Material</title>
            <meta name="description"
                  content="Components for react web apps with Material Design."/>

            <script async src='https://www.googletagmanager.com/gtag/js?id=UA-74678921-2'/>
            <script>{
              "window.dataLayer = window.dataLayer || [];"
              + "function gtag(){dataLayer.push(arguments);}"
              + "gtag('js', new Date());"
              + "gtag('config', 'UA-74678921-2');"
            }</script>
          </Helmet>
          <h1 className="mdc-typography--display1">Getting start</h1>

          <h2 className="mdc-typography--headline">Installation</h2>
          <div ref={(npm) => this.npm = npm}/>
          <div ref={(yarn) => this.yarn = yarn}
               style={{marginTop: "8px"}}/>

          <h3 className="mdc-typography--subheading1">Installing individual components</h3>
          <div ref={(node) => this.npm2 = node} style={{height: "auto"}}/>
          <div ref={(node) => this.yarn2 = node}
               style={{marginTop: "8px"}}/>

          <h2 className="mdc-typography--headline">Including Components</h2>
          <div ref={(node) => this.import = node}
               style={{marginTop: "8px"}}/>
          <h3 className="mdc-typography--subheading1">Individual Components</h3>
          <div ref={(node) => this.importIndividual = node}
               style={{marginTop: "8px"}}/>
          {/*<div style={{height:2000}}></div>*/}
          <h5 className="mdc-typography--caption" style={{marginTop: "50px"}}>
            Note: this is still under development.
          </h5>
        </Fragment>
    )
  }

  componentDidMount() {
    CodeMirror(this.npm, {
      theme: "mbo",
      readOnly: true,
      scrollbarStyle: "simple",
      value: "npm install --save @react.material/components",
    });

    CodeMirror(this.yarn, {
      theme: "mbo",
      readOnly: true,
      scrollbarStyle: "simple",
      value: "yarn add @react.material/components",
    });

    CodeMirror(this.npm2, {
      theme: "mbo",
      readOnly: true,
      scrollbarStyle: "simple",
      value: "npm install --save @react.material/button @react.material/checkbox @react.material/ripple",
    });

    CodeMirror(this.yarn2, {
      theme: "mbo",
      readOnly: true,
      scrollbarStyle: "simple",
      value: "yarn add @react.material/button @react.material/checkbox @react.material/ripple",
    });

    CodeMirror(this.import, {
      theme: "dracula",
      readOnly: true,
      scrollbarStyle: "simple",
      value: "import {Button, Checkbox, Ripple} from '@react.material/components';",
      mode: "javascript"
    });

    CodeMirror(this.importIndividual, {
      theme: "dracula",
      readOnly: true,
      scrollbarStyle: "simple",
      value: "import {Button} from '@react.material/button';",
      mode: "javascript"
    });
  }
}