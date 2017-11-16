import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Set as ImmutableSet} from 'immutable';
import classNames from 'classnames';
import './index.css';


/** @enum {string} */
const cssClasses = {
    ROOT: 'mdc-list-item'
};

export default class ListItem extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
    };

    static defaultProps = {};

    state = {
        classes: ImmutableSet.of(cssClasses.ROOT),
    };

    render() {
        return (<li className={classNames(this.state.classes.toJS())}>{this.props.children}</li>)
    }
}