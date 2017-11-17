import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Set as ImmutableSet} from 'immutable';
import {MDCPersistentDrawerFoundation, util} from '@material/drawer';
import classNames from 'classnames';
import {List, ListItem} from '@react.material/list/index'
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
        hasNecessaryDom: () => Boolean(this.drawer),
        registerInteractionHandler: (evtType, handler) =>
            this.root.addEventListener(util.remapEvent(evtType), handler, util.applyPassive()),
        deregisterInteractionHandler: (evtType, handler) =>
            this.root.removeEventListener(util.remapEvent(evtType), handler, util.applyPassive()),
        registerDrawerInteractionHandler: (evtType, handler) =>
            this.drawer.addEventListener(util.remapEvent(evtType), handler, util.applyPassive()),
        deregisterDrawerInteractionHandler: (evtType, handler) =>
            this.drawer.removeEventListener(util.remapEvent(evtType), handler, util.applyPassive()),
        registerTransitionEndHandler: (handler) =>
            this.root.addEventListener('transitionend', handler, util.applyPassive()),
        deregisterTransitionEndHandler: (handler) =>
            this.root.removeEventListener('transitionend', handler, util.applyPassive()),
        registerDocumentKeydownHandler: (handler) => document.addEventListener('keydown', handler, util.applyPassive()),
        deregisterDocumentKeydownHandler: (handler) => document.removeEventListener('keydown', handler, util.applyPassive()),
        getDrawerWidth: () => this.drawer.clientWidth,
        setTranslateX: (value) =>
            this.drawer.style.setProperty(util.getTransformPropertyName(),
                value === null ? null : `translateX(${value}px)`),
        getFocusableElements: () => this.drawer.querySelectorAll(FOCUSABLE_ELEMENTS),
        notifyOpen: () => this.emit(MDCPersistentDrawerFoundation.strings.OPEN_EVENT),
        notifyClose: () => this.emit(MDCPersistentDrawerFoundation.strings.CLOSE_EVENT),
        saveElementTabState: el => util.restoreElementTabState(el),
        restoreElementTabState: el => util.restoreElementTabState(el),
        makeElementUntabbable: (el) => el.setAttribute('tabindex', '-1'),
        isDrawer: (el) => el === this.drawer
    });

    render() {
        return (
            <aside ref={(root) => this.root = root} className={classNames(this.state.classes.toJS())}>
                <nav ref={(drawer) => this.drawer = drawer} className="mdc-persistent-drawer__drawer">
                    {this.props.children}
                </nav>
            </aside>
        )
    }

    open(opened) {
        if (opened) {
            this.foundation.open();
        } else {
            this.foundation.close();
        }
    }

    isOpen() {
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

        this.root.dispatchEvent(evt);
    }

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
    }
}

const navList = (WrappedComponent) => {
    return class NavList extends WrappedComponent {

        render() {
            return (
                <nav className={classNames(this.state.classes.toJS())}>
                    {this.props.children}
                </nav>
            );
        }
    };
};

const NavList = navList(List);

const navListItem = (WrappedComponent) => {
    return class NavList extends WrappedComponent {

        render() {
            return (
                <nav className={classNames(this.state.classes.toJS())}>
                    {this.props.children}
                </nav>
            );
        }
    };
};

const NavListItem = navListItem(ListItem);


export {Drawer, NavList, NavListItem};

