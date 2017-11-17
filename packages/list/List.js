import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Set as ImmutableSet} from 'immutable';
import classNames from 'classnames';
import ListItem from './ListItem';
import './index.css';


/** @enum {string} */
const cssClasses = {
    ROOT: 'mdc-list',
    AVATAR: 'mdc-list--avatar-list'
};

export default class List extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        avatar: PropTypes.bool,
        children: (props, propName, componentName) => {
            const children = props[propName];

            React.Children.forEach(children, child => {
                console.log(child);
            });

            if (React.Children.toArray(children).some(child => child.type !== ListItem)) {
                return new Error('`' + componentName + '` children should be of type `ListItem`.')
            }
        }
    };

    static defaultProps = {
        avatar: false
    };

    state = {
        classes: ImmutableSet.of(cssClasses.ROOT),
    };

    constructor(props) {
        super(props);
        this.state.classes = this.state.classes.add(props.avatar ? cssClasses.AVATAR : null);
    }

    render() {
        return (
            <ul className={classNames(this.state.classes.toJS())}>
                {this.props.children}
            </ul>
        );
    }
}