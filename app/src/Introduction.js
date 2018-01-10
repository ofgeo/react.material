// import 'codemirror/lib/codemirror.css'
// import './static/styles/codemirror.css'
import './introduction.css';
import React, {Component, Fragment} from 'react';
import {Helmet} from 'react-helmet';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/powershell/powershell';
import 'codemirror/mode/javascript/javascript';

export default class extends Component {
  render() {
    return <Fragment>
      <Helmet>
        <title>React Material</title>
        <meta name="description"
              content="Components for build react web apps with Material Design."/>

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
      <pre>
            <code>npm install --save @react.material/components</code>
          </pre>
      <pre>
            <code>yarn add @react.material/components</code>
          </pre>

      <h3 className="mdc-typography--subheading1">Install individual
        component</h3>
      <pre>
            <code>npm install --save @react.material/button @react.material/checkbox @react.material/ripple</code>
          </pre>
      <pre>
            <code>yarn add @react.material/button @react.material/checkbox @react.material/ripple</code>
          </pre>


      <h2 className="mdc-typography--headline">Including Components</h2>
      <pre className="language-javascript">
            <code>{`import {Button, Checkbox, Ripple} from '@react.material/components';`}</code>
          </pre>
      <h3 className="mdc-typography--subheading1">Include individual
        Component</h3>
      <pre className="language-javascript">
            <code>
              {`import {Button} from '@react.material/button';`}
            </code>
          </pre>

      <h5 className="mdc-typography--caption" style={{marginTop: "50px"}}>
        Note: this is still under development.
      </h5>
    </Fragment>
  }

  componentDidMount() {
    const elements = document.getElementById("content").querySelectorAll("pre code");
    elements.forEach((element) => {
      const classes = element.parentElement.classList;
      let mode = classes.length !== 0 ? classes[0].replace("language-", "") : null;
      CodeMirror((c) => {
        element.parentNode.replaceChild(c, element)
      }, mode ? {
        value: element.innerText.trim(),
        readOnly: true,
        mode: mode,
      } : {
        value: element.innerText.trim(),
        readOnly: true
      });
    });
  }
}
