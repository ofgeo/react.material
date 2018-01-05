import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './index.css';

export class Switch extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    labelId: PropTypes.string,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    checked: false,
    defaultChecked: false,
    disabled: false,
    onChange: () => {
    }
  };

  state = {
    checkedInternal: this.props.checked,
    disabledInternal: this.props.disabled,
    indeterminateInternal: this.props.indeterminate,
  };

  changeHandler(evt) {
    this.props.onChange(evt);
  }

  render() {
    return (
        <div className="mdc-switch"
             onChange={this.changeHandler.bind(this)}>
          <input ref={(input) => this.nativeSwitch = input}
                 id={this.props.id}
                 type="checkbox"
                 className="mdc-switch__native-control"
                 defaultChecked={this.props.defaultChecked}
                 aria-labelledby={this.props.labelId}
                 disabled={this.state.disabledInternal}/>
          <div className="mdc-switch__background">
            <div className="mdc-switch__knob"/>
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
  }

  // Here we synchronize the internal state of the UI component based on what the user has specified.
  componentWillReceiveProps(props) {
    if (props.checked !== this.props.checked) {
      this.setState({
        checkedInternal: props.checked,
      });
    }

    if (props.disabled !== this.props.disabled) {
      this.setState({disabledInternal: props.disabled});
    }
  }

  // Since we cannot set an indeterminate attribute on a native checkbox, we use componentDidUpdate to update
  // the indeterminate value of the native checkbox whenever a change occurs (as opposed to doing so within
  // render()).
  componentDidUpdate() {
    if (this.nativeSwitch) {
      this.nativeSwitch.disabled = this.state.disabledInternal;
    }
    // To make the ripple animation work we update the css properties after React finished building the DOM.
    if (this.root) {
      this.state.rippleCss.forEach((v, k) => {
        this.root.style.setProperty(k, v);
      });
    }
  }
}
