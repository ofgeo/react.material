import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Set as ImmutableSet, Map as ImmutableMap} from 'immutable';
import {MDCRipple, MDCRippleFoundation} from '@material/ripple';
import './index.css';

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
        surface: null,
        rippleCss: new ImmutableMap()
    };
    // Here we initialize a foundation class, passing it an adapter which tells it how to
    // For browser compatibility we extend the default adapter which checks for css variable support.
    rippleFoundation = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
        isUnbounded: () => this.props.unbounded,
        isSurfaceActive: () => {
            if (this.state.surface) {
                this.state.surface[MATCHES](':active')
            }
        },
        addClass: className => {
            if (this.state.surface) {
                this.state.surface.classList.add(className);
            }
        },
        removeClass: className => {
            if (this.state.surface) {
                this.state.surface.classList.remove(className);
            }
        },
        registerInteractionHandler: (evtType, handler) => {
            if (this.state.surface) {
                this.state.surface.addEventListener(evtType, handler);
            }
        },
        deregisterInteractionHandler: (evtType, handler) => {
            if (this.state.surface) {
                this.state.surface.removeEventListener(evtType, handler);
            }
        },
        updateCssVariable: (varName, value) => {
            this.setState(prevState => ({
                rippleCss: prevState.rippleCss.set(varName, value)
            }));
        },
        computeBoundingRect: () => {
            if (this.state.surface) {
                return this.state.surface.getBoundingClientRect();
            }
        },
    }));

    render() {
        return React.Children.only(this.props.children);
    }

    // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
    // so that proper work can be performed.
    componentDidMount() {
        this.state.surface = ReactDOM.findDOMNode(this);
        this.state.surface.classList.add('mdc-ripple-surface');
        this.rippleFoundation.init();
    }

    componentWillUnmount() {
        this.rippleFoundation.destroy();
    }

    // Here we synchronize the internal state of the UI component based on what the user has specified.
    componentWillReceiveProps(props) {
        if (props.disabled !== this.props.disabled) {
            this.setState({disabledInternal: props.disabled});
        }
    }

    componentDidUpdate() {
        // To make the ripple animation work we update the css properties after React finished building the DOM.
        if (this.state.surface) {
            this.state.rippleCss.forEach((v, k) => {
                this.state.surface.style.setProperty(k, v);
            });
        }
    }
}

export {Ripple};

