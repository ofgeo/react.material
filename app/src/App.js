import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import './App.css';
import {Drawer, Navigation, NavigationItem} from '@react.material/drawer/index'
import {ListItemDetail} from '@react.material/list/index'
import {Button, ic_button, ic_card, ic_checkbox, ic_exit, ic_list, Lists} from './components'

class App extends Component {
  render() {
    return [
      <Drawer
          ref="drawer"
          key="drawer" opened>
        <div className="mdc-persistent-drawer__toolbar-spacer"/>
        <div className="mdc-list-group">
          <Navigation>
            <DrawerNavigationItem to='/button' label="Button" icon={ic_button}/>
            <DrawerNavigationItem to='/card' label="Card" icon={ic_card}/>
            <DrawerNavigationItem to='/checkbox' label="Checkbox" icon={ic_checkbox}/>
            <DrawerNavigationItem to='/list' label="List" icon={ic_list}/>

            <NavigationItem>
              <a href="https://www.google.com" target="_blank">
                <ListItemDetail>
                  <img alt="Google" src={ic_exit}/>
                </ListItemDetail>
                List
                <ListItemDetail end>
                  <img alt="Open New tab" src={ic_exit}/>
                </ListItemDetail>
              </a>
            </NavigationItem>
          </Navigation>
        </div>
      </Drawer>,
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

        <Switch>
          <Route exact path="/button" component={Button}/>
          <Route path="/list" component={Lists}/>
        </Switch>
        {/*<div key="switch">*/}
        {/*<Switch>*/}
        {/*/!*<Redirect exact from="/" to='/material-components'/>*!/*/}
        {/*/!*<Route exact path="/" component={App}/>*!/*/}
        {/*<Route exact path="/button" component={Buttons}/>*/}
        {/*<Route path="/list" component={Lists}/>*/}
        {/*/!*<Route path="*" component={NotFound}/>*!/*/}
        {/*/!*</div>*!/*/}
        {/*</Switch>*/}
      </div>
    ]
  }

  menuClicks(e) {
    e.preventDefault();
    this.refs.drawer.open(!this.refs.drawer.isOpen());
  }
}

const DrawerNavigationItem2 = ({label, to, activeOnlyWhenExact}) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
        <div className={match ? 'active' : ''}>
          {match ? '> ' : ''}<Link to={to}>{label}</Link>
        </div>
    )}/>
);
const DrawerNavigationItem = ({to, label, icon, exact}) => (
    <Route exact={exact} path={to} children={({match}) => (
        <NavigationItem selected={!!match}>
          <Link to={to}>
            <ListItemDetail start>
              <img alt={label} src={icon}/>
            </ListItemDetail>
            {label}
          </Link>
        </NavigationItem>
    )}/>
);

export default App;
