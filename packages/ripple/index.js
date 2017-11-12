import React, {PureComponent, Children} from 'react'
import ReactDom from 'react-dom'
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
        disabled: PropTypes.bool,
        children: PropTypes.func.isRequired,
    };

    static defaultProps = {
        disabled: false
    };

    state = {
        children: null,
        classes: new ImmutableSet(),
        rippleCss: new ImmutableMap(),
        disabledInternal: this.props.disabled,
        internalWidth: 0,
        internalHeight: 0
    };

    // Here we initialize a foundation class, passing it an adapter which tells it how to
    // For browser compatibility we extend the default adapter which checks for css variable support.
    rippleFoundation = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
        isUnbounded: () => false,
        // isSurfaceActive: () => React.Children.only(this.props.children)[MATCHES](':active'),
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
            // React.Children.only(this.props.children).addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: (evtType, handler) => {
            // React.Children.only(this.props.children).removeEventListener(evtType, handler);
        },
        updateCssVariable: (varName, value) => {
            this.setState(prevState => ({
                rippleCss: prevState.rippleCss.set(varName, value)
            }));
        },
        computeBoundingRect: () => {
            // return React.Children.only(this.props.children).getBoundingClientRect();
        },
    }));

    render() {
        return this.state.children;
    }

    // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
    // so that proper work can be performed.
    componentDidMount() {
        this.setState({children: React.Children.only(this.props.children)});
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
        console.log(ReactDom.findDOMNode(React.Children.only(this.props.children)));
        // To make the ripple animation work we update the css properties after React finished building the DOM.
        if (React.Children.only(this.props.children)) {
            this.state.rippleCss.forEach((v, k) => {
                React.Children.only(this.props.children).style.setProperty(k, v);
            });
        }
    }
}

export {Ripple};

