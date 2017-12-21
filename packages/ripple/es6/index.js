import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Map as ImmutableMap} from 'immutable';
import {MDCRipple, MDCRippleFoundation, util} from '@material/ripple';

// import './index.css';

function getMatchesProperty(HTMLElementPrototype) {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}

const MATCHES = getMatchesProperty(HTMLElement.prototype);

class Ripple extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    unbounded: PropTypes.bool,
  };

  static defaultProps = {
    unbounded: false,
  };

  state = {
    rippleCss: new ImmutableMap(),
    internalClientWidth: -1
  };
  // Here we initialize a foundation class, passing it an adapter which tells it how to
  // For browser compatibility we extend the default adapter which checks for css variable support.
  // noinspection JSCheckFunctionSignatures
  foundation = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
    isUnbounded: () => this.props.unbounded,
    isSurfaceActive: () => {
      this.root[MATCHES](':active')
    },
    addClass: className => {
      this.root.classList.add(className);
    },
    removeClass: className => {
      //TODO: use this.setState
      if (this.root) {
        this.root.classList.remove(className);
      }
    },
    registerInteractionHandler: (evtType, handler) => {
      const target = evtType === 'mouseup' || evtType === 'pointerup' ? window : this.root;
      target.addEventListener(evtType, handler, util.applyPassive());
    },
    deregisterInteractionHandler: (evtType, handler) => {
      const target = evtType === 'mouseup' || evtType === 'pointerup' ? window : this.root;
      target.removeEventListener(evtType, handler, util.applyPassive());
    },
    updateCssVariable: (varName, value) => {
      if (this.state) {
        this.setState(prevState => ({
          rippleCss: prevState.rippleCss.set(varName, value)
        }));
      }
    },
    computeBoundingRect: () => {
      return this.root.getBoundingClientRect();
    }
  }));

  render() {
    if (React.Children.count(this.props.children) === 1 && typeof this.props.children
        === 'object') {
      return (
          <div ref={(root) => this.root = root}>
            {/*{this.props.children}*/}
            asdasd
          </div>
      )
    } else {
      return (
          <div ref={(root) => this.root = root}>
            {this.props.children}
          </div>
      )
    }
  }

  // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
  // so that proper work can be performed.
  componentDidMount() {
    this.root = this.root || ReactDOM.findDOMNode(this);
    this.root.classList.add('mdc-ripple-surface');
    this.foundation.init();
    this.setState({internalClientWidth: this.root.clientWidth});
  }

  componentWillUnmount() {
    this.state = null;
    this.foundation.destroy();
  }

  componentDidUpdate(prevProps, prevState) {
    //re-layout ripple if resized by siblings
    if (this.state.internalClientWidth !== prevState.internalClientWidth) {
      this.setState({internalClientWidth: this.root.clientWidth});
      if (prevState.internalClientWidth === -1) {
        this.foundation.layout();
      }
    }

    // this.foundation.layout();
    // To make the ripple animation work we update the css properties after React finished building the DOM.
    if (this.root && !this.state.rippleCss.equals(prevState.rippleCss)) {
      this.state.rippleCss.forEach((v, k) => {
        this.root.style.setProperty(k, v);
      });
    }
  }
}

export {Ripple, MDCRipple, MDCRippleFoundation};

