import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

export default class extends Component {
  render() {
    return (
        <div>
          <Helmet>
            <title>NotFound</title>
            <meta name="description" content="Not Found"/>
          </Helmet>
          <h1>Not Found</h1>
          Sorry
        </div>
    )
  }
}