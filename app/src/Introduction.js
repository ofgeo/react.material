import React, {Component, Fragment} from 'react';
import {Helmet} from 'react-helmet';
import * as CodeMirror from 'codemirror-minified';
// import 'codemirror-minified/lib/codemirror.css';
import 'codemirror-minified/mode/javascript/javascript';
import 'codemirror-minified/addon/mode/loadmode';
import 'codemirror-minified/mode/shell/shell';
import './codemirror.css'
import './introduction.css'

export default class extends Component {
  render() {
    return (
        <Fragment>
          <Helmet>
            <title>React Material</title>
            <meta name="description"
                  content="Components for react web apps with Material Design."/>

            <script async
                    src='https://www.googletagmanager.com/gtag/js?id=UA-74678921-2'/>
            <script>{
              "window.dataLayer = window.dataLayer || [];"
              + "function gtag(){dataLayer.push(arguments);}"
              + "gtag('js', new Date());"
              + "gtag('config', 'UA-74678921-2');"
            }</script>
          </Helmet>
          <h1 className="mdc-typography--display1">Getting start</h1>

          <h2 className="mdc-typography--headline">Installation</h2>
          <pre ref={(npm) => this.npm = npm}><code>npm install --save @react.material/components</code></pre>
          {/*<div ref={(npm) => this.npm = npm}/>*/}
          <div ref={(yarn) => this.yarn = yarn}/>

          <h3 className="mdc-typography--subheading1">Installing individual
            components</h3>
          <div ref={(node) => this.npm2 = node}/>
          <div ref={(node) => this.yarn2 = node}/>

          <h2 className="mdc-typography--headline">Including Components</h2>
          <div ref={(node) => this.import = node}/>
          <h3 className="mdc-typography--subheading1">Individual Components</h3>
          <div ref={(node) => this.importIndividual = node}/>

          <h5 className="mdc-typography--caption" style={{marginTop: "50px"}}>
            Note: this is still under development.
          </h5>
        </Fragment>
    )
  }

  componentDidMount() {
    CodeMirror.extendMode("shell",function() {
    });

    const element = this.npm.querySelector("code");
    // console.log(element.parentNode.dataset.highlight);
    CodeMirror(function(t) {
      element.parentNode.parentNode.replaceChild(t, element.parentNode)
    }, {
      mode: "shell",
      readOnly: true,
      value: this.npm.querySelector("code").innerText.trim(),
    });

    CodeMirror(this.yarn, {
      readOnly: true,
      value: "yarn add @react.material/components",
    });

    CodeMirror(this.npm2, {
      readOnly: true,
      value: "npm install --save @react.material/button @react.material/checkbox @react.material/ripple",
    });

    CodeMirror(this.yarn2, {
      readOnly: true,
      value: "yarn add @react.material/button @react.material/checkbox @react.material/ripple",
    });

    CodeMirror(this.import, {
      readOnly: true,
      value: "import {Button, Checkbox, Ripple} from '@react.material/components';",
      mode: "javascript"
    });

    CodeMirror(this.importIndividual, {
      readOnly: true,
      value: "import {Button} from '@react.material/button';",
      mode: "javascript"
    });
  }
}