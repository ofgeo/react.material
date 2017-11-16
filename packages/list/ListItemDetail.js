import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

/** @enum {string} */
const cssClasses = {
    START_DETAIL: 'mdc-list-item__start-detail',
    END_DETAIL: 'mdc-list-item__end-detail',
};

export default class ListItemDetail extends PureComponent {
    static propTypes = {
        start: PropTypes.bool,
        end: PropTypes.bool,
    };

    render() {
        let child = React.Children.only(this.props.children);
        let classes = classNames(this.props.end ? cssClasses.END_DETAIL : cssClasses.START_DETAIL, child.props.className);
        return React.cloneElement(child, {
            className: classes
        })
    }
}