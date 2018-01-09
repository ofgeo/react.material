import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Map as ImmutableMap, Set as ImmutableSet} from 'immutable';
import classNames from 'classnames';
import {MDCLinearProgressFoundation} from '@material/linear-progress';
import './index.css';

export class LinearProgress extends PureComponent {
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
    classes: ImmutableSet.of('mdc-linear-progress', 'mdc-linear-progress--indeterminate'),
    rippleCss: new ImmutableMap(),
    checkedInternal: this.props.checked,
    disabledInternal: this.props.disabled,
    indeterminateInternal: this.props.indeterminate,
  };
  // work with the React component in an idiomatic way.
  foundation = new MDCLinearProgressFoundation({
    addClass: className => this.setState(prevState => ({
      classes: prevState.classes.add(className)
    })),
    removeClass: className => this.setState(prevState => ({
      classes: prevState.classes.remove(className)
    })),
    hasClass: className => this.state.classes.has(className),
    getPrimaryBar: () => this.bar,
    getBuffer: () => this.buffer,
    setStyle: (el, styleProperty, value) => {
      el.style[styleProperty] = value
    }
  });


  render() {
    return (
        <div ref={(bar) => this.bar = bar}
             role="progressbar"
             className={classNames(this.state.classes.toJS())}>
          <div className="mdc-linear-progress__buffering-dots"/>
          <div ref={(buffer) => this.buffer = buffer}
               className="mdc-linear-progress__buffer"/>
          <div
              className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
            <span className="mdc-linear-progress__bar-inner"/>
          </div>
          <div
              className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
            <span className="mdc-linear-progress__bar-inner"/>
          </div>
        </div>

    )
  }

  // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
  // so that proper work can be performed.
  componentDidMount() {
    this.foundation.init();
  }

  componentWillUnmount() {
    this.foundation.destroy();
  }

  // Here we synchronize the internal state of the UI component based on what the user has specified.
  componentWillReceiveProps(props) {
    if (props.checked !== this.props.checked) {
      this.setState({
        checkedInternal: props.checked,
        indeterminateInternal: false
      });
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
    // To make the ripple animation work we update the css properties after React finished building the DOM.
    if (this.root) {
      this.state.rippleCss.forEach((v, k) => {
        this.root.style.setProperty(k, v);
      });
    }
  }
}
