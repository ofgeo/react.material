import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
// import {Set as ImmutableSet, Map as ImmutableMap} from 'immutable';
// import {getCorrectEventName} from '@material/animation';
// import {MDCRipple, MDCRippleFoundation} from '@material/ripple';
import './index.css';

function getMatchesProperty(HTMLElementPrototype) {
    return [
        'webkitMatchesSelector', 'msMatchesSelector', 'matches',
    ].filter((p) => p in HTMLElementPrototype).pop();
}

const MATCHES = getMatchesProperty(HTMLElement.prototype);

class Button extends PureComponent {
    // static propTypes = {
    //     id: PropTypes.string,
    //     disabled: PropTypes.bool
    // };
    //
    // static defaultProps = {
    //     disabled: false
    // };
    //
    // state = {
    //     classes: new ImmutableSet(),
    //     rippleCss: new ImmutableMap(),
    //     disabledInternal: this.props.disabled,
    //     internalWidth: 0,
    //     internalHeight: 0
    // };
    //
    // // Here we initialize a foundation class, passing it an adapter which tells it how to
    // // For browser compatibility we extend the default adapter which checks for css variable support.
    // rippleFoundation = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
    //     isUnbounded: () => false,
    //     isSurfaceActive: () => this.refs.root[MATCHES](':active'),
    //     addClass: className => {
    //         this.setState(prevState => ({
    //             classes: prevState.classes.add(className)
    //         }));
    //     },
    //     removeClass: className => {
    //         this.setState(prevState => ({
    //             classes: prevState.classes.remove(className)
    //         }));
    //     },
    //     registerInteractionHandler: (evtType, handler) => {
    //         this.refs.root.addEventListener(evtType, handler);
    //     },
    //     deregisterInteractionHandler: (evtType, handler) => {
    //         this.refs.root.removeEventListener(evtType, handler);
    //     },
    //     updateCssVariable: (varName, value) => {
    //         this.setState(prevState => ({
    //             rippleCss: prevState.rippleCss.set(varName, value)
    //         }));
    //     },
    //     computeBoundingRect: () => {
    //         //const {left, top} = this.refs.root.getBoundingClientRect();
    //         //const DIM = 40;
    //         //return {
    //         //    top,
    //         //    left,
    //         //    right: left + DIM,
    //         //    bottom: top + DIM,
    //         //    width: DIM,
    //         //    height: DIM,
    //         //}
    //         return this.refs.root.getBoundingClientRect();
    //     },
    // }));
    //
    // render() {
    //     return (
    //         <button ref={'root'} className={`mdc-button theme ${this.state.classes.toJS().join(' ')}`}
    //                 disabled={this.state.disabledInternal}>
    //             {this.props.children}
    //         </button>
    //     )
    // }

    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
    //
    // // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
    // // so that proper work can be performed.
    // componentDidMount() {
    //     this.rippleFoundation.init();
    // }
    //
    // componentWillUnmount() {
    //     this.rippleFoundation.destroy();
    // }
    //
    // // Here we synchronize the internal state of the UI component based on what the user has specified.
    // componentWillReceiveProps(props) {
    //     if (props.disabled !== this.props.disabled) {
    //         this.setState({disabledInternal: props.disabled});
    //     }
    // }
    //
    // componentDidUpdate() {
    //     // To make the ripple animation work we update the css properties after React finished building the DOM.
    //     if (this.refs.root) {
    //         this.state.rippleCss.forEach((v, k) => {
    //             this.refs.root.style.setProperty(k, v);
    //         });
    //     }
    // }
}

export {Button};

