import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Map as ImmutableMap} from 'immutable';
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

    static displayName = 'Ripple';

    state = {
        rippleCss: new ImmutableMap()
    };
    // Here we initialize a foundation class, passing it an adapter which tells it how to
    // For browser compatibility we extend the default adapter which checks for css variable support.
    foundation = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
        isUnbounded: () => this.props.unbounded,
        isSurfaceActive: () => {
            this.surface[MATCHES](':active')
        },
        addClass: className => {
            this.surface.classList.add(className);
        },
        removeClass: className => {
            this.surface.classList.remove(className);
        },
        registerInteractionHandler: (evtType, handler) => {
            this.surface.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: (evtType, handler) => {
            this.surface.removeEventListener(evtType, handler);
        },
        updateCssVariable: (varName, value) => {
            this.setState(prevState => ({
                rippleCss: prevState.rippleCss.set(varName, value)
            }));
        },
        computeBoundingRect: () => {
            return this.surface.getBoundingClientRect();
        },
    }));

    render() {
        return React.Children.only(this.props.children);
    }

    componentWillMount() {
        this.setState({surface: ReactDOM.findDOMNode(this)});
    }

    // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
    // so that proper work can be performed.
    componentDidMount() {
        this.surface = ReactDOM.findDOMNode(this);
        this.surface.classList.add('mdc-ripple-surface');
        this.foundation.init();
        const _surface = this.surface;
        this.surface.addEventListener('mouseout', function () {
            if (document.createEvent) {
                const pointerup = document.createEvent("HTMLEvents");
                pointerup.initEvent('pointerup', false, true);
                _surface.dispatchEvent(pointerup);
            } else {
                _surface.fireEvent('pointerup');
            }
        });
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    // Here we synchronize the internal state of the UI component based on what the user has specified.
    componentWillReceiveProps(props) {
        if (props.disabled !== this.props.disabled) {
            this.setState({disabledInternal: props.disabled});
        }
    }

    componentDidUpdate(props, state) {
        // To make the ripple animation work we update the css properties after React finished building the DOM.
        if (this.surface && !this.state.rippleCss.equals(state.rippleCss)) {
            this.state.rippleCss.forEach((v, k) => {
                this.surface.style.setProperty(k, v);
            });
        }
    }
}

export {Ripple, MDCRipple, MDCRippleFoundation};

