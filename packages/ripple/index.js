import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Map as ImmutableMap} from 'immutable';
import {MDCRipple, MDCRippleFoundation, util} from '@material/ripple';
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
        children: PropTypes.element.isRequired,
        unbounded: PropTypes.bool,
    };

    static defaultProps = {
        unbounded: false,
    };

    state = {
        rippleCss: new ImmutableMap()
    };
    // Here we initialize a foundation class, passing it an adapter which tells it how to
    // For browser compatibility we extend the default adapter which checks for css variable support.
    foundation = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
        isUnbounded: () => false,
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
            const target = evtType === 'mouseup' || evtType === 'pointerup' ? window : this.surface;
            target.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterInteractionHandler: (evtType, handler) => {
            const target = evtType === 'mouseup' || evtType === 'pointerup' ? window : this.surface;
            target.removeEventListener(evtType, handler, util.applyPassive());
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
    }

    componentWillUnmount() {
        this.foundation.destroy();
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

