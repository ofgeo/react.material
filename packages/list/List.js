import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Set as ImmutableSet} from 'immutable';
import classNames from 'classnames';
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
        // children: (props, propName, componentName) => {
        //     const children = props[propName];
        //
        //     React.Children.forEach(children, child => {
        //         console.log(child);
        //     });
        //
        //     if (React.Children.toArray(children).some(child => child.type !== List.Item)) {
        //         return new Error('`' + componentName + '` children should be of type `Item`.')
        //     }
        // }
    };

    static defaultProps = {
        avatar: false
    };

    state = {
        classes: ImmutableSet.of(cssClasses.ROOT),
    };


    render() {
        return (
            <ul className={classNames(this.state.classes.toJS(), {[cssClasses.AVATAR]: this.props.avatar})}>
                {this.props.children}
            </ul>
        );
    }
}