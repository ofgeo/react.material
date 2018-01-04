import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Map as ImmutableMap, Set as ImmutableSet} from 'immutable';
import classNames from 'classnames';
// import {getCorrectEventName} from '@material/animation';
// import {MDCRipple, MDCRippleFoundation, util} from '@material/ripple';
import './index.css';

function getMatchesProperty(HTMLElementPrototype) {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}

const MATCHES = getMatchesProperty(HTMLElement.prototype);

export class Switch extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    labelId: PropTypes.string,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    checked: false,
    defaultChecked: false,
    disabled: false,
    indeterminate: false,
    onChange: () => {
    }
  };

  state = {
    classes: ImmutableSet.of('mdc-checkbox', 'theme'),
    rippleCss: new ImmutableMap(),
    checkedInternal: this.props.checked,
    disabledInternal: this.props.disabled,
    indeterminateInternal: this.props.indeterminate,
  };

  // Here we initialize a foundation class, passing it an adapter which tells it how to
  // For browser compatibility we extend the default adapter which checks for css variable support.
  // noinspection JSCheckFunctionSignatures
  // rippleFoundation = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
  //   isUnbounded: () => true,
  //   isSurfaceActive: () => this.root[MATCHES](':active'),
  //   addClass: className => {
  //     this.setState(prevState => ({
  //       classes: prevState.classes.add(className)
  //     }));
  //   },
  //   removeClass: className => {
  //     this.setState(prevState => ({
  //       classes: prevState.classes.remove(className)
  //     }));
  //   },
  //   registerInteractionHandler: (evtType, handler) => {
  //     const target = evtType === 'mouseup' || evtType === 'pointerup' ? window : this.nativeCb;
  //     target.addEventListener(evtType, handler, util.applyPassive());
  //   },
  //   deregisterInteractionHandler: (evtType, handler) => {
  //     const target = evtType === 'mouseup' || evtType === 'pointerup' ? window : this.nativeCb;
  //     target.removeEventListener(evtType, handler, util.applyPassive());
  //   },
  //   updateCssVariable: (varName, value) => {
  //     this.setState(prevState => ({
  //       rippleCss: prevState.rippleCss.set(varName, value)
  //     }));
  //   },
  //   computeBoundingRect: () => {
  //     const {left, top} = this.root.getBoundingClientRect();
  //     const DIM = 40;
  //     return {
  //       top,
  //       left,
  //       right: left + DIM,
  //       bottom: top + DIM,
  //       width: DIM,
  //       height: DIM,
  //     };
  //   },
  // }));

  changeHandler(evt) {
    this.props.onChange(evt);
  }

  render() {
    return (
        <div className="mdc-switch"
             onChange={this.changeHandler.bind(this)}>
          <input type="checkbox" id="basic-switch" className="mdc-switch__native-control"/>
          <div className="mdc-switch__background">
            <div className="mdc-switch__knob"/>
          </div>
        </div>
    );

    // Within render, we generate the html needed to render a proper MDC-Web checkbox.
    return (
        <div ref={(root) => this.root = root}
             className={classNames(this.state.classes.toJS())}
             onChange={this.changeHandler.bind(this)}>
          <input ref={(nativeCb) => this.nativeCb = nativeCb}
                 id={this.props.id}
                 type="checkbox"
                 className="mdc-checkbox__native-control"
                 aria-labelledby={this.props.labelId}
                 defaultChecked={this.props.defaultChecked}
                 disabled={this.state.disabledInternal}/>
          <div className="mdc-checkbox__background">
            <svg className="mdc-checkbox__checkmark"
                 viewBox="0 0 24 24">
              <path className="mdc-checkbox__checkmark__path"
                    fill="none"
                    stroke="white"
                    d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
            </svg>
            <div className="mdc-checkbox__mixedmark"/>
          </div>
        </div>
    );
  }

  // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
  // so that proper work can be performed.
  componentDidMount() {
    // this.rippleFoundation.init();
  }

  componentWillUnmount() {
    this.foundation.destroy();
  }

  // Here we synchronize the internal state of the UI component based on what the user has specified.
  componentWillReceiveProps(props) {
    if (props.checked !== this.props.checked) {
      this.setState({checkedInternal: props.checked, indeterminateInternal: false});
    }
    if (props.indeterminate !== this.props.indeterminate) {
      this.setState({indeterminateInternal: props.indeterminate});
    }
    if (props.disabled !== this.props.disabled) {
      this.setState({disabledInternal: props.disabled});
    }
  }

  // Since we cannot set an indeterminate attribute on a native checkbox, we use componentDidUpdate to update
  // the indeterminate value of the native checkbox whenever a change occurs (as opposed to doing so within
  // render()).
  componentDidUpdate() {
    if (this.nativeCb) {
      this.nativeCb.indeterminate = this.state.indeterminateInternal;
    }
    // To make the ripple animation work we update the css properties after React finished building the DOM.
    if (this.root) {
      this.state.rippleCss.forEach((v, k) => {
        this.root.style.setProperty(k, v);
      });
    }
  }
}
