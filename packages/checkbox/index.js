import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Set as ImmutableSet, Map as ImmutableMap} from 'immutable';
import {getCorrectEventName} from '@material/animation/dist/mdc.animation';
import {MDCRipple, MDCRippleFoundation} from '@material/ripple/dist/mdc.ripple';
import {MDCCheckboxFoundation} from '@material/checkbox/dist/mdc.checkbox';
import './index.css';

function getMatchesProperty(HTMLElementPrototype) {
    return [
        'webkitMatchesSelector', 'msMatchesSelector', 'matches',
    ].filter((p) => p in HTMLElementPrototype).pop();
}

const MATCHES = getMatchesProperty(HTMLElement.prototype);

export class Checkbox extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        labelId: PropTypes.string,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        indeterminate: PropTypes.bool,
        onChange: PropTypes.func
    };

    static defaultProps = {
        checked: false,
        disabled: false,
        indeterminate: false,
        onChange: () => {
        }
    };

    state = {
        classes: new ImmutableSet(),
        rippleCss: new ImmutableMap(),
        checkedInternal: this.props.checked,
        disabledInternal: this.props.disabled,
        indeterminateInternal: this.props.indeterminate,
        mouseEntered: false
    };

    // Here we initialize a foundation class, passing it an adapter which tells it how to
    // For browser compatibility we extend the default adapter which checks for css variable support.
    rippleFoundation = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
        isUnbounded: () => true,
        isSurfaceActive: () => false,
        addClass: className => {
            this.setState(prevState => ({
                classes: prevState.classes.add(className)
            }));
        },
        removeClass: className => {
            this.setState(prevState => ({
                classes: prevState.classes.remove(className)
            }));
        },
        registerInteractionHandler: (evtType, handler) => {
            this.refs.nativeCb.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: (evtType, handler) => {
            this.refs.nativeCb.removeEventListener(evtType, handler);
        },
        updateCssVariable: (varName, value) => {
            this.setState(prevState => ({
                rippleCss: prevState.rippleCss.set(varName, value)
            }));
        },
        computeBoundingRect: () => {
            const {left, top} = this.refs.root.getBoundingClientRect();
            const DIM = 40;
            return {
                top,
                left,
                right: left + DIM,
                bottom: top + DIM,
                width: DIM,
                height: DIM,
            };
        },
    }));
    // work with the React component in an idiomatic way.
    foundation = new MDCCheckboxFoundation({
        addClass: className => this.setState(prevState => ({
            classes: prevState.classes.add(className)
        })),
        removeClass: className => this.setState(prevState => ({
            classes: prevState.classes.remove(className)
        })),
        registerAnimationEndHandler: handler => {
            if (this.refs.root) {
                this.refs.root.addEventListener(getCorrectEventName(window, 'animationend'), handler);
            }
        },
        deregisterAnimationEndHandler: handler => {
            if (this.refs.root) {
                this.refs.root.removeEventListener(getCorrectEventName(window, 'animationend'), handler)
            }
        },
        registerChangeHandler: handler => {
            // Note that this could also be handled outside of using the native DOM API.
            // For example, onChange within render could delegate to a function which calls
            // the handler passed here, as well as performs the other business logic. The point
            // being our foundations are designed to be adaptable enough to fit the needs of the host
            // platform.
            if (this.refs.nativeCb) {
                this.refs.nativeCb.addEventListener('change', handler);
            }
        },
        deregisterChangeHandler: handler => {
            if (this.refs.nativeCb) {
                this.refs.nativeCb.removeEventListener('change', handler);
            }
        },
        getNativeControl: () => {
            if (!this.refs.nativeCb) {
                throw new Error('Invalid state for operation');
            }
            return this.refs.nativeCb;
        },
        forceLayout: () => {
            if (this.refs.nativeCb) {
                this.refs.nativeCb.offsetWidth;
            }
        },
        isAttachedToDOM: () => Boolean(this.refs.nativeCb),
    });

    changeHandler(evt) {
        this.props.onChange(evt);
    }

    mouseenter(event) {
        this.state.mouseEntered = true;
    }

    mouseout(event) {
        this.state.mouseEntered = false;
    }

    render() {
        // Within render, we generate the html needed to render a proper MDC-Web checkbox.
        return (
            <div ref="root" className={`mdc-checkbox theme ${this.state.classes.toJS().join(' ')}`}
                 onChange={this.changeHandler.bind(this)}
                 onMouseEnter={this.mouseenter.bind(this)}
                 style={{}}>
                <input ref="nativeCb"
                       id={this.props.id}
                       type="checkbox"
                       className="mdc-checkbox__native-control"
                       aria-labelledby={this.props.labelId}
                       disabled={this.state.disabledInternal}
                       onMouseOut={this.mouseout.bind(this)}/>
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
        this.foundation.init();
        this.rippleFoundation.init();
    }

    componentWillUnmount() {
        this.rippleFoundation.destroy();
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
        if (this.refs.nativeCb) {
            this.refs.nativeCb.indeterminate = this.state.indeterminateInternal;
        }
        // To make the ripple animation work we update the css properties after React finished building the DOM.
        if (this.refs.root) {
            this.state.rippleCss.forEach((v, k) => {
                this.refs.root.style.setProperty(k, v);
            });
        }
    }
}
