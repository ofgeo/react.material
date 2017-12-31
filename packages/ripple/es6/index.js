import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Map as ImmutableMap, Set as ImmutableSet} from 'immutable';
import {MDCRipple, MDCRippleFoundation, util} from '@material/ripple';

import '@material/ripple/dist/mdc.ripple.css';

function getMatchesProperty(HTMLElementPrototype) {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}

const MATCHES = getMatchesProperty(HTMLElement.prototype);

class Ripple extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    unbounded: PropTypes.bool
  };

  static defaultProps = {
    unbounded: false,
  };

  state = {
    classes: ImmutableSet.of('mdc-ripple-surface'),
    rippleCss: new ImmutableMap(),
    internalClientWidth: -1
  };

  // Here we initialize a foundation class, passing it an adapter which tells it how to
  // For browser compatibility we extend the default adapter which checks for css variable support.

  // noinspection JSCheckFunctionSignatures
  foundation = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
    isUnbounded: () => this.props.unbounded,
    isSurfaceActive: () => {
      this.root[MATCHES](':active');
    },
    addClass: className => {
      if (!this.unmounting) {
        this.setState(prevState => ({
          classes: prevState.classes.add(className)
        }));
      }
    },
    removeClass: className => {
      if (!this.unmounting) {
        this.setState(prevState => ({
          classes: prevState.classes.remove(className)
        }));
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
      if (!this.unmounting) {
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
    if (React.Children.count(this.props.children, this.context) >= 1
        || (typeof this.props.children) !== 'object') {
      return (
          <div ref={(root) => this.root = root}
               className={classNames(this.state.classes.toJS())}
               style={this.props.style}>
            {this.props.children}
          </div>
      );
    } else {
      const child = React.Children.only(this.props.children);
      return React.cloneElement(child, {
            ref: (node) => {
              // Keep your own reference
              this.root = node;
              // Call the original ref, if any
              const {ref} = child;
              if (typeof ref === 'function') {
                ref(node);
              }
            },
            className: classNames(this.state.classes.toJS(), child.props.className),
          }
      );
    }
  }

  // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
  // so that proper work can be performed.
  componentDidMount() {
    this.foundation.init();
    this.setState({internalClientWidth: this.root.clientWidth});
  }

  componentWillUnmount() {
    this.unmounting = true;
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

    // To make the ripple animation work we update the css properties after React finished building the DOM.
    if (this.root && !this.state.rippleCss.equals(prevState.rippleCss)) {
      this.state.rippleCss.forEach((v, k) => {
        this.root.style.setProperty(k, v);
      });
    }
  }
}

export {Ripple, MDCRipple, MDCRippleFoundation};

