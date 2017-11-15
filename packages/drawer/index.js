import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Set as ImmutableSet} from 'immutable';
import classNames from 'classnames';
import {MDCPersistentDrawerFoundation, util} from '@material/drawer';
import './index.css';

const {FOCUSABLE_ELEMENTS} = MDCPersistentDrawerFoundation.strings;
const {cssClasses} = MDCPersistentDrawerFoundation;

class Drawer extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        opened: PropTypes.bool,
    };

    static defaultProps = {
        opened: false
    };

    state = {
        classes: ImmutableSet.of(cssClasses.ROOT),
        isOpen_: false
    };

    foundation = new MDCPersistentDrawerFoundation({
        addClass: className => this.setState(prevState => ({
            classes: prevState.classes.add(className)
        })),
        removeClass: className => this.setState(prevState => ({
            classes: prevState.classes.remove(className)
        })),
        hasClass: className => this.state.classes.has(className),
        hasNecessaryDom: () => Boolean(this.refs.drawer),
        registerInteractionHandler: (evtType, handler) =>
            this.refs.root.addEventListener(util.remapEvent(evtType), handler, util.applyPassive()),
        deregisterInteractionHandler: (evtType, handler) =>
            this.refs.root.removeEventListener(util.remapEvent(evtType), handler, util.applyPassive()),
        registerDrawerInteractionHandler: (evtType, handler) =>
            this.refs.drawer.addEventListener(util.remapEvent(evtType), handler),
        deregisterDrawerInteractionHandler: (evtType, handler) =>
            this.refs.drawer.removeEventListener(util.remapEvent(evtType), handler),
        registerTransitionEndHandler: (handler) =>
            this.refs.root.addEventListener('transitionend', handler),
        deregisterTransitionEndHandler: (handler) =>
            this.refs.root.removeEventListener('transitionend', handler),
        registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler),
        deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler),
        getDrawerWidth: () => this.refs.drawer.offsetWidth,
        setTranslateX: (value) =>
            this.refs.drawer.style.setProperty(util.getTransformPropertyName(),
                value === null ? null : `translateX(${value}px)`),
        getFocusableElements: () => this.refs.drawer.querySelectorAll(FOCUSABLE_ELEMENTS),
        notifyOpen: () => this.emit(MDCPersistentDrawerFoundation.strings.OPEN_EVENT),
        notifyClose: () => this.emit(MDCPersistentDrawerFoundation.strings.CLOSE_EVENT),
        saveElementTabState: el => util.restoreElementTabState(el),
        restoreElementTabState: el => util.restoreElementTabState(el),
        makeElementUntabbable: (el) => el.setAttribute('tabindex', '-1'),
        isDrawer: (el) => el === this.refs.drawer
    });


    render() {
        return (
            <aside ref="root" className={classNames(this.state.classes.toJS())}>
                <nav ref="drawer" className="mdc-persistent-drawer__drawer">
                    <div className="mdc-persistent-drawer__toolbar-spacer"/>
                    <div className="mdc-list-group">
                        <nav className="mdc-list">
                            <a className="mdc-list-item mdc-persistent-drawer--selected" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox
                            </a>
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
                            </a>
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">send</i>Sent
                                Mail
                            </a>
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">drafts</i>Drafts
                            </a>
                        </nav>

                        <hr className="mdc-list-divider"/>

                        <nav className="mdc-list">
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">email</i>All
                                Mail
                            </a>
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">delete</i>Trash
                            </a>
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">report</i>Spam
                            </a>
                        </nav>
                    </div>
                </nav>
            </aside>
        )
    }

    set open(opened) {
        if (opened) {
            this.foundation.open();
        } else {
            this.foundation.close();
        }
    }

    get isOpen() {
        return this.foundation.isOpen();
    }

    emit(evtType, evtData, shouldBubble = false) {
        let evt;
        if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
                detail: evtData,
                bubbles: shouldBubble,
            });
        } else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }

        this.refs.root.dispatchEvent(evt);
    }

// Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
// so that proper work can be performed.
    componentDidMount() {
        this.foundation.init();

        if (this.props.opened) {
            this.foundation.open();
        }

    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    componentDidUpdate() {
        // To make the ripple animation work we update the css properties after React finished building the DOM.
        // if (this.refs.root) {
        //     this.state.rippleCss.forEach((v, k) => {
        //         this.refs.root.style.setProperty(k, v);
        //     });
        // }
    }
}


export {Drawer};

