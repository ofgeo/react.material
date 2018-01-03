import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import * as CodeMirror from 'codemirror-minified'
import 'codemirror-minified/lib/codemirror.css'
import 'codemirror-minified/theme/mbo.css'
import 'codemirror-minified/mode/shell/shell'

import './style.css'

export default class extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  };


  render() {
    const title = this.title();
    return (
        <div style={{padding: "14px"}}>
          <Helmet>
            <title>React Material - {title}</title>
            <meta name="description"
                  content={`${title} Component for Material Design`}/>

            <script async
                    src='https://www.googletagmanager.com/gtag/js?id=UA-74678921-2'/>
            <script>
              {
                "window.dataLayer = window.dataLayer || [];"
                + "function gtag(){dataLayer.push(arguments);}"
                + "gtag('js', new Date());"
                + "gtag('config', 'UA-74678921-2');"
              }
            </script>
          </Helmet>
          <div className="demo-block">
            {this.demo() ? this.demo() : null}
          </div>
          <h2>Installation</h2>
          <div ref={(code) => this.code = code} style={{height: "auto"}}/>
        </div>
    )
  }

  title() {
  }

  packageName() {
  }

  demo() {
  }

  componentDidMount() {
    CodeMirror(this.code, {
      theme: "mbo",
      readOnly: true,
      value: "npm install --save " + this.packageName(),
    });
  }
}