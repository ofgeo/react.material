import React, {Fragment, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

export default class extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
        <Fragment>
          <Helmet>
            <title>React Material - {this.props.title}</title>
            <meta name="description"
                  content={`${this.props.title} Component for Material Design`}/>

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
          {this.props.children}
        </Fragment>
    )
  }
}