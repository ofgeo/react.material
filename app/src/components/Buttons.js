import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

export default class extends Component {
  render() {
    return (
        <div>
          <Helmet>
            <title>Button</title>
            <meta name="description" content="Buttons Demo"/>
          </Helmet>
          Buttons Demo
        </div>
    )
  }
}