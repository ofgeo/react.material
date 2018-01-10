import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import * as CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/shell/shell'

import './style.css'

export default class extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    const title = this.title();
    return (
        <Fragment>
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
          <ul className="demo-block">
            {this.demo() ? this.demo() : null}
          </ul>
          <h2>Installation</h2>
          <div ref={(npm) => this.npm = npm} style={{height: "auto"}}/>
          <div ref={(yarn) => this.yarn = yarn}
               style={{height: "auto", marginTop: "8px"}}/>
        </Fragment>
    )
  }

  title() {
  }

  packageName() {
  }

  demo() {
  }

  componentDidMount() {
    CodeMirror(this.npm, {
      readOnly: true,
      value: "npm install --save " + this.packageName(),
    });

    CodeMirror(this.yarn, {
      readOnly: true,
      value: "yarn add " + this.packageName(),
    });
  }
}