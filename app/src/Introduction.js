import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

export default class extends Component {
  render() {
    return (
        <div>
          <Helmet>
            <title>Introduction</title>
            <meta name="description" content="React Material Introduction"/>
          </Helmet>
          Coming soon
        </div>
    )
  }
}