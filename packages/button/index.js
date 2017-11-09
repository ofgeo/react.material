import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Set as ImmutableSet, Map as ImmutableMap} from 'immutable';
import {getCorrectEventName} from '@material/animation';
import {MDCRipple, MDCRippleFoundation} from '@material/ripple';
import './index.css';

class Button extends PureComponent {
    static propTypes = {
        id: PropTypes.string
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

    render() {
        return (
            <button>
                {this.props.children}
            </button>
        )
    }
}

export {Button};

