import React, {Component} from 'react';
import './App.css';
import {Drawer, NavList} from '@react.material/drawer/index'

import {List, ListItem} from '@react.material/list/index'

class App extends Component {
    render() {
        return [
            <Drawer
                ref="drawer"
                key="drawer"
                opened>
                <div className="mdc-persistent-drawer__toolbar-spacer"/>
                <div className="mdc-list-group">
                    <List avatar>
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
                    </List>

                    <hr className="mdc-list-divider"/>

                    <NavList avatar>
                        <ListItem>
                            <a className="mdc-list-item" href="#">
                                <i className="material-icons mdc-list-item__start-detail"
                                   aria-hidden="true">email</i>All
                                Mail
                            </a>
                            <ListItem/>

                        <a className="mdc-list-item" href="#">
                            <i className="material-icons mdc-list-item__start-detail"
                               aria-hidden="true">delete</i>Trash
                        </a>
                        <a className="mdc-list-item" href="#">
                            <i className="material-icons mdc-list-item__start-detail"
                               aria-hidden="true">report</i>Spam
                        </a>
                    </NavList>
                </div>
            </Drawer>,
            <div key="content" id="content">
                <header className="mdc-toolbar mdc-elevation--z4">
                    <div className="mdc-toolbar__row">
                        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                            <button className="demo-menu material-icons mdc-toolbar__menu-icon"
                                    tabIndex="-1"
                                    onMouseDown={e => e.preventDefault()}
                                    onClick={this.menuClicks.bind(this)}>menu
                            </button>
                            <span className="mdc-toolbar__title catalog-title">Persistent Drawer</span>
                        </section>
                    </div>
                </header>
            </div>
        ]
    }

    menuClicks(e) {
        e.preventDefault();
        this.refs.drawer.open(!this.refs.drawer.isOpen());
    }
}

export default App;
