import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

export default class extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
        <div style={{padding: "14px"}}>
          <Helmet>
            <title>React Material - {this.props.title}</title>
            <meta name="description"
                  content={`${this.props.title} Component for Material Design`}/>
          </Helmet>
          {this.props.children}
        </div>
    )
  }
}