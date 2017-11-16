import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Set as ImmutableSet} from 'immutable';
import classNames from 'classnames';
import './index.css';


class List extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        href: PropTypes.string,
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

    static defaultProps = {};

    state = {
        classes: null,
    };


    render() {
        return (
            <nav className="mdc-list">
                {this.props.children}
            </nav>
        );
    }

    static Item = class Item extends PureComponent {
        static propTypes = {};

        static defaultProps = {};

        state = {
            classes: ImmutableSet.of('mdc-list-item'),
        };


        render() {
            return (
                <a href={this.state.href} className={classNames(this.state.classes.toJS())}>
                    {this.props.children}
                </a>
            )
        }

        componentDidMount() {
        }

        componentWillUnmount() {
        }

        componentDidUpdate() {
        }
    }

}

const GRAVITIES = {start: 'start', end: 'end'};

class ItemIcon extends PureComponent {
    static propTypes = {
        gravity: PropTypes.oneOf(Object.keys(GRAVITIES))
    };

    static defaultProps = {
        gravity: GRAVITIES.start
    };

    state = {
        classes: ImmutableSet.of('mdc-list-item'),
    };

    static gravities = GRAVITIES;

    render() {
        return (
            <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">
                network_wifi
            </i>
        )
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidUpdate() {
    }
}

class FontListItem extends PureComponent {
    static propTypes = {};

    static defaultProps = {};

    state = {
        classes: ImmutableSet.of('mdc-list-item'),
    };


    render() {
        return (
            <a href={this.state.href} className={classNames(this.state.classes.toJS())}>
                <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">
                    network_wifi
                </i>
                Wi-Fi
            </a>
        )
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidUpdate() {
    }
}

export {List};

