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
            <section>
              <a href="https://github.com/ofgeo/react.material" style={{marginRight: "8px"}}>
                <svg aria-hidden="true" width="32" height="32" version="1.1" viewBox="0 0 16 16"
                     fill="#FFFFFF">
                  <GithubSvgPath/>
                </svg>
              </a>
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

const GithubSvgPath = () => (
    <path fillRule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
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
