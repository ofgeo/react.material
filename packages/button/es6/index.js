import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import {Map as ImmutableMap, Set as ImmutableSet} from 'immutable';
import {MDCRipple, MDCRippleFoundation} from '@react.material/ripple/es6';
import './index.css';

function getMatchesProperty(HTMLElementPrototype) {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}

const MATCHES = getMatchesProperty(HTMLElement.prototype);

class Button extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    disabled: false
  };

  state = {
    classes: ImmutableSet.of('mdc-button', 'mdc-button--raised', 'theme'),
    rippleCss: new ImmutableMap(),
    children: {},
    disabledInternal: this.props.disabled,
    internalWidth: 0,
    internalHeight: 0
  };

  // Here we initialize a foundation class, passing it an adapter which tells it how to
  // For browser compatibility we extend the default adapter which checks for css variable support.
  // noinspection JSCheckFunctionSignatures
  foundation = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
    isUnbounded: () => false,
    isSurfaceActive: () => this.root[MATCHES](':active'),
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
      target.addEventListener(evtType, handler);
    },
    deregisterInteractionHandler: (evtType, handler) => {
      const target = evtType === 'mouseup' || evtType === 'pointerup' ? window : this.root;
      target.removeEventListener(evtType, handler);
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

    },
  }));

  render() {
    return (
        <button ref={(root) => this.root = root}
                className={classNames(this.state.classes.toJS())}
                disabled={this.state.disabledInternal}>
          {this.props.children}
        </button>
    )
  }

  // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
  // so that proper work can be performed.
  componentDidMount() {
    this.foundation.init();
  }

  componentWillUnmount() {
    this.unmounting = true;
    this.foundation.destroy();
  }

  // Here we synchronize the internal state of the UI component based on what the user has specified.
  componentWillReceiveProps(props) {
    if (props.disabled !== this.props.disabled) {
      this.setState({disabledInternal: props.disabled});
    }
  }

  componentDidUpdate() {
    // To make the ripple animation work we update the css properties after React finished building the DOM.
    if (this.root) {
      this.state.rippleCss.forEach((v, k) => {
        this.root.style.setProperty(k, v);
      });
    }
  }
}

const flatButton = (WrappedComponent) => {
  return class FlatButton extends WrappedComponent {
    constructor(props) {
      super(props);
      this.state = Object.assign({}, this.state, {
        classes: ImmutableSet.of('mdc-button', 'theme')
      });
    }
  }
};

const FlatButton = flatButton(Button);

export {Button, FlatButton};

