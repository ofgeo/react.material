import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import Article from './../shared/Article'

export default class extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
        <Article>
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
        </Article>
    )
  }
}