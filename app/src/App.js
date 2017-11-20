import React, {Component} from 'react';
import {} from 'react-router-dom'
import './App.css';
import ic_button from './static/ic_button_24px.svg';
import ic_card from './static/ic_card_24px.svg';
import ic_checkbox from './static/ic_selection_control_24px.svg';
import ic_list from './static/ic_list_24px.svg';
import ic_exit from './static/ic_exit_to_app_black_24px.svg';
import {Drawer, Nav, NavLink} from '@react.material/drawer/index'
import {ListItemDetail} from '@react.material/list/index'
import {Ripple} from '@react.material/ripple/index'

class App extends Component {
  render() {
    return [
      <Drawer
          ref="drawer"
          key="drawer"
          opened>
        <div className="mdc-persistent-drawer__toolbar-spacer"/>
        <div className="mdc-list-group">
          <Nav>
            {/*<Ripple>*/}
            <NavLink href={"#"}>
              <ListItemDetail start>
                <img alt="Button" src={ic_button}/>
              </ListItemDetail>
              Button
              <ListItemDetail end>
                <img alt="Button" src={ic_exit}/>
              </ListItemDetail>
            </NavLink>
            {/*</Ripple>*/}
            <NavLink href={"#"}>
              <ListItemDetail>
                <img alt="Card" src={ic_card}/>
              </ListItemDetail>
              Card
              <ListItemDetail end>
                <img alt="Card" src={ic_exit}/>
              </ListItemDetail>
            </NavLink>
            <NavLink href={"#"}>
              <ListItemDetail>
                <img alt="Checkbox" src={ic_checkbox}/>
              </ListItemDetail>
              Checkbox
              <ListItemDetail end>
                <img alt="Checkbox" src={ic_exit}/>
              </ListItemDetail>
            </NavLink>
            <NavLink href={"#"}>
              <ListItemDetail>
                <img alt="Checkbox" src={ic_list}/>
              </ListItemDetail>
              List
              <ListItemDetail end>
                <img alt="Checkbox" src={ic_exit}/>
              </ListItemDetail>
            </NavLink>
          </Nav>
        </div>
      </Drawer>
      ,
      <div key="content" id="content">
        <header className="mdc-toolbar mdc-elevation--z4">
          <div className="mdc-toolbar__row">
            <section
                className="mdc-toolbar__section mdc-toolbar__section--align-start">
              <button
                  className="demo-menu material-icons mdc-toolbar__menu-icon"
                  tabIndex="-1"
                  onMouseDown={e => e.preventDefault()}
                  onClick={this.menuClicks.bind(this)}>menu
              </button>
              <span
                  className="mdc-toolbar__title catalog-title">Persistent Drawer</span>
            </section>
          </div>
        </header>
      </div>,
      <Switch key="switch">
        {/*<Redirect exact from="/" to='/material-components'/>*/}
        <Route exact path="/" component={}/>
        <Route path="/material-components" component={MaterialComponents}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    ]
  }

  menuClicks(e) {
    e.preventDefault();
    this.refs.drawer.open(!this.refs.drawer.isOpen());
  }
}

export default App;
