import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
        <main id="main">
          {this.props.children}
        </main>
    )
  }
}